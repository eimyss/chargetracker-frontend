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

  getExpensesTypes(): string[] {
    if (sessionStorage.getItem(this.typesKey) == null) {
      console.log('getting expense types from server');
      this.expenseService.getExpensesTypes().subscribe(result => {
        console.log('receiving: ' + result);
        sessionStorage.setItem(this.typesKey, JSON.stringify(result));
      }, error => console.log(error));
    } else {
      console.log('Expense Types already cached')
      return JSON.parse(sessionStorage.getItem(this.typesKey));
    }
    return JSON.parse(sessionStorage.getItem(this.typesKey));;
  }

  refreshCache() {
    sessionStorage.removeItem('accounts');
    this.getAccountListNoPromise();
  }
  getAccountList(refresh: boolean): Promise<any> {

    if (refresh) {
      console.log('refresh wanted');
      sessionStorage.removeItem('accounts');
    }

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sessionStorage.getItem('accounts') == null) {
          console.log('getting accounts from server');
          this.accountService.getAllAccounts().subscribe(result => {
            console.log('receiving: ' + result);
            sessionStorage.setItem('accounts', JSON.stringify(result));
          }, error => console.log(error));
        } else {
          console.log('Accounts already cached')
          resolve(JSON.parse(sessionStorage.getItem('accounts')));
        }
        resolve(JSON.parse(sessionStorage.getItem('accounts')));
      }, 1000);
    });
    return promise;

  }


  getAccountListNoPromise(): AccountDTO[] {
    if (sessionStorage.getItem('accounts') == null) {
      console.log('getting accounts from server');
      this.accountService.getAllAccounts().subscribe(result => {
        console.log('receiving: ' + result);
        sessionStorage.setItem('accounts', JSON.stringify(result));
        return JSON.parse(sessionStorage.getItem('accounts'));
      }, error => console.log(error));
    } else {
      console.log('Accounts already cached')
      return JSON.parse(sessionStorage.getItem('accounts'));
    }
  }

  getAccountListObservable(): Observable<AccountDTO[]> {
    if (sessionStorage.getItem('accounts') == null) {
      console.log('getting accounts from server');
      this.accountService.getAllAccounts().subscribe(result => {
        console.log('receiving: ' + result);
//        sessionStorage.setItem('accounts', JSON.stringify(result));
        return of(JSON.parse(sessionStorage.getItem('accounts')));
      }, error => console.log(error));
      return this.accountService.getAllAccounts();
    } else {
      console.log('Accounts already cached')
      return of(JSON.parse(sessionStorage.getItem('accounts')));
    }
  }

  getGlobalOverview(): Observable<AccountOverview> {
    if (sessionStorage.getItem(this.globalOverviewKey) == null) {
      console.log('getting overview from server');
      this.expenseService.getOverview().subscribe(result => {
        console.log('receiving: ' + result);
  //      sessionStorage.setItem(this.globalOverviewKey, JSON.stringify(result));
        return of(JSON.parse(sessionStorage.getItem(this.globalOverviewKey)));
      }, error => console.log(error));
      return this.expenseService.getOverview();
    } else {
      console.log('Accounts already cached')
      return of(JSON.parse(sessionStorage.getItem(this.globalOverviewKey)));
    }
  }

}
