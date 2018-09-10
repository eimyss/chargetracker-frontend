import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeycloakService } from '../shared/service/keycloack.service';
import { EnvironmentService } from '../shared/environment/environment.service';
import { AccountCacheService } from '../shared/service/cache/account-cache.service';
import { AccountDTO } from '../shared/dto/accountDTO';

@Component({
  selector: 'expenses-navigation',
  templateUrl: './expenses-navigation.component.html',
  styleUrls: ['./expenses-navigation.component.css']
})
export class ExpensesNavigationComponent {

  title = 'app';
  isAuthenticated: boolean;
  accountList: AccountDTO[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private keycloack: KeycloakService, private env: EnvironmentService, private accountcache: AccountCacheService) {}

  async ngOnInit() {

    this.title = this.env.title;
    this.accountList = this.accountcache.getAccountList();
    console.log('keylocak is loggedin: ' + this.keycloack.isLoggedIn());
    this.isAuthenticated = await this.keycloack.isLoggedIn();
  }


  }
