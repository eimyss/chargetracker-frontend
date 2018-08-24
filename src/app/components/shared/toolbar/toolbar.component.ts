import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../../shared/environment/environment.service';
import { KeycloakService } from '../../../shared/service/keycloack.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'app';
  isAuthenticated: boolean;


  constructor(private keycloack: KeycloakService, private env: EnvironmentService) { }

  async ngOnInit() {

    this.title = this.env.title;

    console.log('keylocak is loggedin: ' + this.keycloack.isLoggedIn());
    this.isAuthenticated = await this.keycloack.isLoggedIn();
  }

}
