import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EnvironmentService} from '../environment/environment.service'
import { of } from 'rxjs/observable/of';
import {expenses} from '../mock/mock-expenses'

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

  getMockedExpenses(): Observable<any> {
  return of(expenses);
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
