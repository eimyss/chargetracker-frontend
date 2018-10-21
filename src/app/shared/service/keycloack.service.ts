
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {
  static environment: any;
  static auth: any = {};
  public loggedIn: boolean;


  constructor(private environment: EnvironmentService) {
  }

  static init(): Promise<any> {

    let keycloakAuth: any = new Keycloak({
      url: 'https://security.eimantas-services.de:443/auth',
      //url: 'https://java-3.eimantas.server:8543/auth',
        realm: 'expenses',
        clientId: 'expenses-app'
    });
    KeycloakService.auth.loggedIn = false;

      return new Promise((resolve, reject) => {
        keycloakAuth.init({ onLoad: 'login-required' })
          .success(() => {
            KeycloakService.auth.loggedIn = true;
            KeycloakService.auth.authz = keycloakAuth;
            KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/expenses/protocol/openid-connect/logout?redirect_uri=http://localhost:4200";
            resolve();
          })
          .error(() => {
            reject();
          });
      });

    }

  logout() {
    console.log('*** LOGOUT');
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;

    window.location.href = KeycloakService.auth.logoutUrl;
  }

  isLoggedIn(): boolean {
    return KeycloakService.auth.loggedIn;
  }

  isLogged(): Observable<boolean> {
    return KeycloakService.auth.loggedIn;
  }


  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
      //  KeycloakService.auth.authz.updateToken(5)
        //  .success(() => {
            console.log('token is updated');
            resolve(<string>KeycloakService.auth.authz.token);
      //    })
      //    .error(() => {
    //        console.log('token is failed');
        //    reject('Failed to refresh token');
        //  });
      }
    });
  }
}
