import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { KeycloakService } from '../service/keycloack.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private kc: KeycloakService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return  from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Only add to known domains since we don't want to send our tokens to just anyone.
    // Also, Giphy's API fails when the request includes a token.
  //  if (request.urlWithParams.indexOf('localhost') > -1) {

//  this.kc.getToken()
    //   .then(token => {
  //       let headers = new RequestOptionsArgs({
  //         'Accept': 'application/json',
//           'Authorization': 'Bearer ' + token
  //       });



      const accessToken = await this.kc.getToken();
  //    console.log('got access token: ' + accessToken);
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });
  //  }
    return next.handle(request).toPromise();
  }
}
