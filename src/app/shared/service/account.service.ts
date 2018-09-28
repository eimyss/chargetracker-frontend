import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { EnvironmentService } from '../environment/environment.service'
import { expenses } from '../mock/mock-expenses'
import { Expense } from '../dto/expense';
import { AccountDTO } from '../dto/accountDTO';
import { AccountCacheService } from './cache/account-cache.service';

@Injectable()
export class AccountService {


  constructor(private http: HttpClient, private environment: EnvironmentService) {
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


  getAccount(id: string) {
    return this.http.get(this.environment.ACCOUNT_API + '/get/' + id);
  }


  save(account: AccountDTO): Observable<any> {
    let result: Observable<Object>;
    console.log('saving:' + account);

    if (account['id']) {
      console.log('updating account');
      result = this.http.put(this.environment.ACCOUNT_API + '/save', account);
    } else {
      console.log('saving new account');
      result = this.http.post(this.environment.ACCOUNT_API + '/save', account);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
