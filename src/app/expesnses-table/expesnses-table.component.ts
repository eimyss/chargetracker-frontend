import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ExpesnsesTableDataSource } from './expesnses-table-datasource';

@Component({
  selector: 'expesnses-table',
  templateUrl: './expesnses-table.component.html',
  styleUrls: ['./expesnses-table.component.css']
})
export class ExpesnsesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ExpesnsesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ExpesnsesTableDataSource(this.paginator, this.sort);
  }
}
