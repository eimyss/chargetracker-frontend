import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './shared/service/keycloack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated: boolean;

 constructor(private keycloack: KeycloakService) {
 }
 ngOnInit() {
   console.log('keylocak is loggedin: ' + this.keycloack.isLoggedIn());
   this.isAuthenticated = this.keycloack.isLoggedIn();
 }
}
