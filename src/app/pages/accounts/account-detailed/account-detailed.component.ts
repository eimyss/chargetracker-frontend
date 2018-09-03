import { Component, OnInit } from '@angular/core';
import { AccountDTO } from '../../../shared/dto/accountDTO'
import { AccountService } from '../../../shared/service/account.service';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';

@Component({
  selector: 'app-account-detailed',
  templateUrl: './account-detailed.component.html',
  styleUrls: ['./account-detailed.component.css']
})
export class AccountDetailedComponent implements OnInit {

  account: AccountDTO = new AccountDTO();

  constructor(private accountService: AccountCacheService) { }

  ngOnInit() {
  }

  save() {

  console.log('saving...');
  this.accountService.save(this.account).subscribe(result => {
    console.log('done' + result)
  }, error => console.error(error));
  }
  delete(id) {
  console.log('deleting...');
  }


}
