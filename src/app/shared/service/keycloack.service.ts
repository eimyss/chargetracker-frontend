
import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {
  static auth: any = {};
  public loggedIn: boolean;

  static init(): Promise<any> {

    let keycloakAuth: any = new Keycloak({
        url: 'http://192.168.123.157:8180/auth',
        realm: 'expenses',
        clientId: 'expenses-app'
    });
    KeycloakService.auth.loggedIn = false;

      return new Promise((resolve, reject) => {
        keycloakAuth.init({ onLoad: 'login-required' })
          .success(() => {
            KeycloakService.auth.loggedIn = true;
            KeycloakService.auth.authz = keycloakAuth;
            KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/expenses/protocol/openid-connect/logout?redirect_uri=/angular2-product/index.html";
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

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz.updateToken(5)
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      }
    });
  }
}
