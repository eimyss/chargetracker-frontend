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

  getById(id: string) {
    return this.http.get(this.environment.API + '/projects/get/' + id);
  }

  remove(id: string) {
    return this.http.get(this.environment.API + '/projects/get/' + id);
  }
  save(project: ProjectDTO): Observable<any> {
    let result: Observable<Object>;
    console.log('saving:' + project);

    if (project['id']) {
      console.log('updating account');
      result = this.http.put(this.environment.PROJECT_API + '/save', project);
    } else {
      console.log('saving new account');
      result = this.http.post(this.environment.PROJECT_API + '/save', project);
    }
    return result;
  }

}
