import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeycloakService } from '../shared/service/keycloack.service';
import { EnvironmentService } from '../shared/environment/environment.service';
import { AccountCacheService } from '../shared/service/cache/account-cache.service';
import { AccountDTO } from '../shared/dto/accountDTO';
import { AccountOverview } from '../shared/dto/account-overview';
import { ExpenseService } from '../shared/expense/expense.service';

@Component({
  selector: 'expenses-navigation',
  templateUrl: './expenses-navigation.component.html',
  styleUrls: ['./expenses-navigation.component.css']
})
export class ExpensesNavigationComponent {
  overview : AccountOverview;
  title = 'app';
  unexpensedSize: number = 0;
  accountList: AccountDTO[] = new Array<AccountDTO>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private env: EnvironmentService,
    private expensesService: ExpenseService,
    private cache: AccountCacheService,
    private keycloack: KeycloakService) {}

  ngOnInit() {
    this.title = this.env.title;
    this.cache.getAccountListObservable().subscribe(data => {
     console.log('setting account list with lenght: ' + data.length);
     this.accountList = data;
   });
   this.expensesService.getOverview().subscribe(data => {
     console.log('overview done');
     this.overview = data;
     this.unexpensedSize = this.overview.unexpenced.length;
  });
  }

logout()  {
  console.log('logout');
  this.keycloack.logout();
}

  }
