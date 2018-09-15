import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ExpesnsesTableDataSource } from './expesnses-table-datasource';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';

@Component({
  selector: 'accounts-table',
  templateUrl: './expesnses-table.component.html',
  styleUrls: ['./expesnses-table.component.scss']
})
export class AccountTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ExpesnsesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private accountcache: AccountCacheService) {}

   ngOnInit() {

    this.dataSource = new ExpesnsesTableDataSource(this.paginator, this.sort,  this.accountcache.getAccountListNoPromise());

    //this.accountcache.getAccountList().then(accounts => {
  //    console.log('promise resolved with size:' + accounts.length);
  //  this.dataSource = new ExpesnsesTableDataSource(this.paginator, this.sort,accounts);
  //  }), (error => console.error(error));
  }

   detailAccount(dto: AccountDTO){
    console.log('click:' + dto);
  }
}
