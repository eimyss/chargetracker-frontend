import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountDTO } from '../../dto/accountDTO';
import { Observable, of } from 'rxjs';
import { ExpenseService } from '../../expense/expense.service';
import { AccountOverview } from '../../dto/account-overview';

@Injectable({
  providedIn: 'root'
})
export class AccountCacheService {
  private typesKey: string = "types";
  private globalOverviewKey: string = "global";

  constructor(private accountService: AccountService, private expenseService: ExpenseService) {
  }

  getTest(): string {
    sessionStorage.setItem('key', 'value');
    return 'seting storage';
  }

  save(account: AccountDTO): Observable<any> {
    return this.accountService.save(account);
  }

  getExpensesTypes(): Observable<any> {
    return this.expenseService.getExpensesTypes();
  }

  getAccountList(): Observable<AccountDTO[]> {
    return this.accountService.getAllAccounts();
  }


  getAccountListObservable(): Observable<AccountDTO[]> {
    return this.accountService.getAllAccounts();
  }

  getGlobalOverview(): Observable<any> {
    return this.expenseService.getOverview();
  }

}
