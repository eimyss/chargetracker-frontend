import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';
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
         .pipe(debounceTime(400),
           startWith(''),
           map(val => this.filter(val))
         );
  }

  filter(val: string): Expense[] {
    let exist = this.options.findIndex(t => t.name === val);
    if (exist > -1) return;
    console.log('getting backend search');
 this.expenseService.doExpenseSearch(val).subscribe((res: any[]) => {
    this.options = res;
    return res;
   });

}
}
