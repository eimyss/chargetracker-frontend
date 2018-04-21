import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';
import { ExpenseService } from '../shared/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Array<any>;

  constructor(private expenseService: ExpenseService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
      for (const expense of this.expenses) {
       this.giphyService.get(expense.name).subscribe(url => expense.giphyUrl = url);
     }
 });
  }

}
