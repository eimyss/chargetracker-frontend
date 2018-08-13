import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { EnvironmentService} from '../environment/environment.service'
import {expenses} from '../mock/mock-expenses'
import {MockedOverview} from '../mock/mock-overview'
import { Expense } from '../dto/expense';
import { AccountDTO } from '../dto/accountDTO';

@Injectable()
export class AccountService {


  constructor(private http: HttpClient,private environment: EnvironmentService) {
  }

  getAllAccounts(): Observable<any> {
    if (this.environment.backend_enabled) {
          return this.http.get(this.environment.ACCOUNT_API + '/list');
    }
  }


  performTest(url: string): Observable<any> {
    if (this.environment.backend_enabled) {
          return this.http.get(this.environment.API + url);
    }

  }


  getOverview(): Observable<any> {

    if (this.environment.backend_enabled) {
           return this.http.get(this.environment.API + '/account/overview/482')
    } else {
      return this.getMockedOverview();
    }

  }

	doExpenseSearch(name: string):  Observable<any> {
      if (this.environment.backend_enabled) {
	    return this.http.get(this.environment.API + '/expenses/search?name=' + name);
    }  else {
        return this.getMockedOverview();
      }
	}

  getMockedExpenses(): Observable<any> {
    // apparently table is not directly visible, if data delivered instantly...
  return of(expenses).pipe(delay(new Date(Date.now() + 1000)));
}

getMockedOverview(): Observable<any> {
return of(MockedOverview);
}


  get(id: string) {
    return this.http.get(this.environment.EXPENSE_API + '/' + id);
  }

  save(account: AccountDTO): Observable<any> {
    let result: Observable<Object>;
    console.log('saving:' + account);
        if (this.environment.backend_enabled) {
          if (account['id']) {
            result = this.http.put(account.id+'', account);
          } else {
            console.log('saving new account');
            result = this.http.post(this.environment.ACCOUNT_API + '/save', account);
          }
        }else {
            console.log('only backend suppoerted');
        }

    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
