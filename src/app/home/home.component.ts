import { Component, OnInit } from '@angular/core';
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
    console.log('keylocak is loggedin: ' + this.keycloack.isLoggedIn());
    this.isAuthenticated = this.keycloack.isLoggedIn();
  }



}
