import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { EnvironmentService } from '../../environment/environment.service';


@Injectable()
export class BackendInfoServiceService {

  constructor(private http: HttpClient, private environment: EnvironmentService) {}


  getInfoList(): Observable <any> {
    if (this.environment.backend_enabled) {
      return this.http.get(this.environment.API + '/expenses/backend/keys');
    }
  }

  getInfoForKey(key: string): Observable <any> {
    if (this.environment.backend_enabled) {
      return this.http.get(this.environment.API + '/expenses/backend/keys/'+key);
    }
  }
}
