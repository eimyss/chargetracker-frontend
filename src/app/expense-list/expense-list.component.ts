import { Component, OnInit,ViewChild } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';
import { ExpenseService } from '../shared/expense/expense.service';
import {MatTableDataSource, MatSort, PageEvent, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {



  expenses: Array<any>;
  displayedColumns = ['giphyUrl', 'name', 'betrag', 'ort'];
  dataSource: MatTableDataSource<any>;


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

  constructor(private expenseService: ExpenseService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
      this.length = data.length;
      console.log('expenses done');
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      for (const expense of this.expenses) {
       this.giphyService.get(expense.name).subscribe(url => expense.giphyUrl = url);
     }
 });

 this.expenseService.getOverview().subscribe(data => {
   console.log('overview done');
   console.log(data);
});
  }

}
