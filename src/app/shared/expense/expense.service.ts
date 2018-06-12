import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { EnvironmentService} from '../environment/environment.service'
import {expenses} from '../mock/mock-expenses'
import {MockedOverview} from '../mock/mock-overview'

@Injectable()
export class ExpenseService {


  constructor(private http: HttpClient,private environment: EnvironmentService) {
  }

  getAll(): Observable<any> {
    if (this.environment.backend_enabled) {
          return this.http.get(this.environment.API + '/open-expenses');
    } else {
      return this.getMockedExpenses();
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

  save(expense: any): Observable<any> {
    let result: Observable<Object>;
    if (expense['href']) {
      result = this.http.put(expense.href, expense);
    } else {
      result = this.http.post(this.environment.EXPENSE_API, expense);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
