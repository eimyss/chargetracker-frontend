import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';
import { KeycloakService } from '../../../shared/service/keycloack.service';

@Component({
  selector: 'app-lower-toolbar',
  templateUrl: './lower-toolbar.component.html',
  styleUrls: ['./lower-toolbar.component.css']
})
export class LowerToolbarComponent implements OnInit {
  isAuthenticated: boolean;
  accountList: AccountDTO[];

  constructor(private keycloack: KeycloakService, private accountcache: AccountCacheService) {
  }

  async ngOnInit() {
      console.log('keylocak is loggedin: ' + this.keycloack.isLoggedIn());
      this.isAuthenticated = this.keycloack.isLoggedIn();
      this.accountList = this.accountcache.getAccountList();
  }
}
