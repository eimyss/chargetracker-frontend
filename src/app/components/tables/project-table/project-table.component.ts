import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';
import { Observable } from 'rxjs';
import { ProjectServiceService } from '../../../shared/service/backend/project-service.service';
import { ProjectDTO } from '../../../shared/dto/ProjectDTO';

@Component({
  selector: 'project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageEvent: PageEvent;
  dataSource: MatTableDataSource<any>;
  resultsloaded: boolean = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','rate'];
  accounts: ProjectDTO[] = new Array<ProjectDTO>();

  constructor(private projectService: ProjectServiceService) { }

  ngOnInit() {
      this.projectService.getProjectList().subscribe(data=> {
      this.accounts = data;
      this.dataSource = new MatTableDataSource(this.accounts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.length = data.length;
    },error => console.error(error));

  }

  detailAccount(dto: AccountDTO) {
    console.log('click:' + dto);
  }
}
