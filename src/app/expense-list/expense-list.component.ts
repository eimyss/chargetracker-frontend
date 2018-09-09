import { Component, OnInit, ViewChild } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';
import { ExpenseService } from '../shared/expense/expense.service';
import { MatTableDataSource, MatSort, PageEvent, MatPaginator } from '@angular/material';
import { AccountDTO } from '../shared/dto/accountDTO';
import { AccountCacheService } from '../shared/service/cache/account-cache.service';
import { AccountService } from '../shared/service/account.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  accountId: number = 0;
  expenses: Array<any>;
  displayedColumns = ['giphyUrl', 'name', 'betrag', 'ort'];
  dataSource: MatTableDataSource<any>;
  accounts: AccountDTO[] = [];

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    console.log('after view');
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private expenseService: ExpenseService,
    private accuntCache: AccountCacheService) { }

  ngOnInit() {
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
      this.length = this.expenses.length;
      console.log('expenses done with lenght: ' + this.expenses.length + 'and set lenght : ' + this.length);
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      for (const expense of this.expenses) {
      //  this.giphyService.get(expense.name).subscribe(url => expense.giphyUrl = url);
      }
    });
    this.accounts = this.accuntCache.getAccountList();

  }


  switchAccount() {
    console.log(this.accountId);
    this.expenseService.getExpsenseByAccountId(this.accountId).subscribe(data => {
      console.log('got:' + data);
      this.expenses = data;
      this.length = this.expenses.length;
      console.log('expenses done with lenght: ' + this.expenses.length + 'and set lenght : ' + this.length);
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
 }

}
