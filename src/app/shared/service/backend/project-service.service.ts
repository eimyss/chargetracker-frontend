import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../../environment/environment.service';
import { Observable } from 'rxjs';
import { ProjectDTO } from '../../dto/ProjectDTO';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient, private environment: EnvironmentService) { }


  getProjectList(): Observable <any> {
      return this.http.get(this.environment.API + '/projects/get/all');
  }

}
