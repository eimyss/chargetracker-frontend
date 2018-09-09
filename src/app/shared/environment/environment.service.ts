import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class EnvironmentService {
  public API = environment.API;
  public EXPENSE_API = this.API + '/open-expenses';
  public SAVE_EXPENSES_API = this.API + '/save';
  public ACCOUNT_API = this.API + '/account';
  public backend_enabled = environment.backend;
  public title = environment.title;

  constructor() {
  }
  isBackendEnabled() {
    return this.backend_enabled;
  }
  getAPIUrl() {
  return this.API;
  }

}
