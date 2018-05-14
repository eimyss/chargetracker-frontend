import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {map, startWith} from 'rxjs/operators';
import {Expense} from '../shared/dto/expense'
import { ExpenseService } from '../shared/expense/expense.service';


@Component({
  selector: 'app-expenses-search',
  templateUrl: './expenses-search.component.html',
  styleUrls: ['./expenses-search.component.css']
})
export class ExpensesSearchComponent implements OnInit {


  myControl: FormControl = new FormControl();

  options = Array<Expense>();

  filteredOptions: Observable<Expense[]>;

  constructor(private expenseService: ExpenseService) {
  }

  checkAutocomplete() {
    console.log('autocomplete');
  }

  ngOnInit() {
   this.filteredOptions = this.myControl.valueChanges
   .debounceTime(400)
   .do(value => {

      // i don't want to make another request on value change if content placeholder already has it.
      let exist = this.options.findIndex(t => t.name === value);
      if (exist > -1) return;

     this.expenseService.doExpenseSearch(value).subscribe((res: any[]) => { this.options = res; });
     console.log('observable done');
  }).delay(500).map(() => this.options);

  }
}
