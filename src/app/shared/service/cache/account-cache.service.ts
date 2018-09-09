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
    localStorage.setItem('key', 'value');
    return 'seting storage';
  }

  save(account: AccountDTO): Observable<any> {
    return this.accountService.save(account);
  }

  getExpensesTypes(): string[] {
    if (localStorage.getItem(this.typesKey) == null) {
      console.log('getting expense types from server');
      this.expenseService.getExpensesTypes().subscribe(result => {
        console.log('receiving: ' + result);
        localStorage.setItem(this.typesKey, JSON.stringify(result));
      }, error => console.log(error));
    } else {
      console.log('Expense Types already cached')
      return JSON.parse(localStorage.getItem(this.typesKey));
    }
    return JSON.parse(localStorage.getItem(this.typesKey));;
  }

  refreshCache() {
    localStorage.removeItem('accounts');
    this.getAccountList();
  }
  getAccountList(): AccountDTO[] {
    if (localStorage.getItem('accounts') == null) {
      console.log('getting accounts from server');
      this.accountService.getAllAccounts().subscribe(result => {
        console.log('receiving: ' + result);
        localStorage.setItem('accounts', JSON.stringify(result));
      }, error => console.log(error));
    } else {
      console.log('Accounts already cached')

      return JSON.parse(localStorage.getItem('accounts'));
    }

    return JSON.parse(localStorage.getItem('accounts'));;

  }

}
