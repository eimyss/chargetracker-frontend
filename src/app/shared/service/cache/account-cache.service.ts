import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountDTO } from '../../dto/accountDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountCacheService {

  constructor(private accountService: AccountService) {
  }

getTest(): string {
  localStorage.setItem('key', 'value');
return 'seting storage';
}

  save(account: AccountDTO): Observable<any> {
    return this.accountService.save(account);
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
