import { Component, OnInit } from '@angular/core';
import { AccountDTO } from '../../../shared/dto/accountDTO'
import { AccountService } from '../../../shared/service/account.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';

@Component({
  selector: 'app-account-detailed',
  templateUrl: './account-detailed.component.html',
  styleUrls: ['./account-detailed.component.css']
})
export class AccountDetailedComponent implements OnInit {
  sub: Subscription;
  account: AccountDTO = new AccountDTO();

  constructor(private accountService: AccountService, private route: ActivatedRoute,
    private router: Router,private accountCachce: AccountCacheService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.accountService.getAccount(id).subscribe((account: any) => {
          if (account) {
            this.account = account;
          } else {
            console.log(`Account with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  save() {
    console.log('saving...');
    this.accountService.save(this.account).subscribe(result => {
      console.log('done' + result)
    //  this.gotoList();
    }, error => console.error(error));
  }
  delete(id) {
    console.log('deleting...');
  }
  gotoList() {
    this.router.navigate(['/account/list']);
  }

}
