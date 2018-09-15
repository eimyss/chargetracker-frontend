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
  accountList: AccountDTO[] = new Array<AccountDTO>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private env: EnvironmentService, private cache: AccountCacheService) {}

  ngOnInit() {
        this.title = this.env.title;
    this.accountList = this.cache.getAccountListNoPromise();

  }

logout()  {
  console.log('logout');
}

  }
