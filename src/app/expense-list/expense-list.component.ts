import { Component, OnInit,ViewChild } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';
import { ExpenseService } from '../shared/expense/expense.service';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Array<any>;
  displayedColumns = ['giphyUrl', 'name', 'betrag', 'ort'];
  dataSource: MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   console.log('after view');
 }

  constructor(private expenseService: ExpenseService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
      console.log('expenses done');
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      for (const expense of this.expenses) {
       this.giphyService.get(expense.name).subscribe(url => expense.giphyUrl = url);
     }
 });
  }

}
