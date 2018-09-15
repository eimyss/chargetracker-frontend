import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountDTO } from '../../dto/accountDTO';
import { Observable } from 'rxjs';
import { ExpenseService } from '../../expense/expense.service';

@Injectable({
  providedIn: 'root'
})
export class AccountCacheService {
  private typesKey: string = "types";

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
    this.getAccountList();
  }
  getAccountList(): AccountDTO[] {
    if (sessionStorage.getItem('accounts') == null) {
      console.log('getting accounts from server');
      this.accountService.getAllAccounts().subscribe(result => {
        console.log('receiving: ' + result);
        sessionStorage.setItem('accounts', JSON.stringify(result));
      }, error => console.log(error));
    } else {
      console.log('Accounts already cached')

      return JSON.parse(sessionStorage.getItem('accounts'));
    }

    return JSON.parse(sessionStorage.getItem('accounts'));;

  }

}
