import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';

@Component({
  selector: 'app-lower-toolbar',
  templateUrl: './lower-toolbar.component.html',
  styleUrls: ['./lower-toolbar.component.css']
})
export class LowerToolbarComponent implements OnInit {
  isAuthenticated: boolean;
  accountList: AccountDTO[];

  constructor(private oktaAuth: OktaAuthService, private accountcache: AccountCacheService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    this.accountList = this.accountcache.getAccountList();
  }
}
