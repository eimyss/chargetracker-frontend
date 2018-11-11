import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, PageEvent, MatPaginator } from '@angular/material';
import { ExpenseService } from '../../../shared/expense/expense.service';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import { Expense } from '../../../shared/dto/expense';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  accountId: number = 0;
  expenses: Array<any>;
  displayedColumns = ['idcolumn', 'name', 'betrag', 'ort'];
  dataSource: MatTableDataSource<any>;
  accounts: AccountDTO[] = [];
  searchValue: any = 'test';
  myControl = new FormControl();
  options: Expense[] = [{ id: 10, name: 'Bier',
  betrag: 11.4, ort: 'Bingen', href: '', purpose: 'test',
  expensable: true, category: 'Food', account: 'Konto-1',
  accountId: 10, expenseDate: '01/02/2018', createDate: '01/02/2018', giphyUrl: '' }];
  filteredOptions: Expense[];

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
    private accuntCache: AccountCacheService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {

    this.myControl.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      this.searchValue = val;
      if (val) {
        this.filterTable(val);
      } else {
        this.fillTable();
      }
    });

    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
      this.length = this.expenses.length;
      console.log('expenses done with lenght: ' + this.expenses.length + 'and set lenght : ' + this.length);
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.accuntCache.getAccountList().subscribe(data => {
      this.accounts = data;
    });

}
  public filterTable(value: any) {
    console.log('search string with value ' + this.searchValue);
    this.expenseService.doExpenseSearch(this.searchValue).subscribe((res: Expense[]) => {
      console.log('setting options with size: ' + res.length);
      this.options = res;
      this.filteredOptions = res;
      this.expenses = res;
      this.length = this.expenses.length;
      console.log('expenses done with lenght: ' + this.expenses.length + 'and set lenght : ' + this.length);
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
      return res;
    });
  }

  public fillTable() {
    console.log('empty string');
    this.expenseService.getAll().subscribe(data => {
      this.options = data;
      this.filteredOptions = data;
      this.expenses = data;
      this.length = this.expenses.length;
      console.log('expenses done with lenght: ' + this.expenses.length + 'and set lenght : ' + this.length);
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
      return data;
    });
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
