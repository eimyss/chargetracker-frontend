import { Component, OnInit } from '@angular/core';
import { AccountCacheService } from '../../shared/service/cache/account-cache.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private accountcache: AccountCacheService) { }

  ngOnInit() {
    console.log('cache service say: ' + this.accountcache.getAccountListNoPromise());
  }

}
