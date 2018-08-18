import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { KeycloakService } from '../shared/service/keycloack.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private keycloack: KeycloakService) {
  }

  async ngOnInit() {
    KeycloakService.init().then(() => {
      console.log('init okay');
      this.isAuthenticated = true;
      })
    .catch(err => console.log('init not okay', err));
  }



}
