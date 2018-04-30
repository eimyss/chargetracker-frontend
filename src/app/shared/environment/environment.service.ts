import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class EnvironmentService {
  public API = environment.API;
  public EXPENSE_API = this.API + '/open-expenses';
  public backend_enabled = environment.backend;

  constructor() {
  }
  isBackendEnabled() {
    return this.backend_enabled;
  }
  getAPIUrl() {
  return this.API;
  }

}
