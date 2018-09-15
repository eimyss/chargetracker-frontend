import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';
import { Observable } from 'rxjs';

@Component({
  selector: 'accounts-table',
  templateUrl: './expesnses-table.component.html',
  styleUrls: ['./expesnses-table.component.scss']
})
export class AccountTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageEvent: PageEvent;
  dataSource: MatTableDataSource<any>;
  resultsloaded: boolean = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  accounts: AccountDTO[] = new Array<AccountDTO>();

  constructor(private accountcache: AccountCacheService) { }

  ngOnInit() {
      this.accountcache.getAccountListObservable().subscribe(data=> {
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
