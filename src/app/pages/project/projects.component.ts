import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectDTO } from '../../shared/dto/ProjectDTO';
import { ProjectServiceService } from '../../shared/service/backend/project-service.service';
import { AccountService } from '../../shared/service/account.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  sub: Subscription;
  project: ProjectDTO = new ProjectDTO();
  constructor(private route: ActivatedRoute,
    private router: Router,private projectService: ProjectServiceService,private accountService: AccountService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.projectService.getById(id).subscribe((project: any) => {
          if (project) {
            this.project = project;
          } else {
            console.log(`Project with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/project/list']);
  }

  switchAktiv() {
    console.log('switch active');
  }
  save() {
    this.projectService.save(this.project).subscribe(result => {
      console.log('saving: ' + this.project)
      this.gotoList();
    }, error => console.log(error));
  }

  remove(id) {
    this.projectService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
