import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpenseService {
  public API = '//localhost:8080';
  public EXPENSE_API = this.API + '/expenses';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/expenses');
  }

  get(id: string) {
    return this.http.get(this.EXPENSE_API + '/' + id);
  }

  save(expense: any): Observable<any> {
    let result: Observable<Object>;
    if (expense['href']) {
      result = this.http.put(expense.href, expense);
    } else {
      result = this.http.post(this.EXPENSE_API, expense);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
