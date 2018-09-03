import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../shared/expense/expense.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';
import { Expense } from '../shared/dto/expense';
import { AccountCacheService } from '../shared/service/cache/account-cache.service';
import { AccountDTO } from '../shared/dto/accountDTO';

export interface Type {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})



export class ExpenseEditComponent implements OnInit,OnDestroy {
  // TODO replace with backend
  types: Type[] = [
  {value: 'diesel', viewValue: 'Spritt'},
  {value: 'essen', viewValue: 'Essen'},
  {value: 'rauchen', viewValue: 'Zigaretten'}
  ];
  accounts: AccountDTO[] = [];


// WTF Its like Java....
  expense: Expense = new Expense();

  selected = 'true';
  sub: Subscription;

 constructor(private route: ActivatedRoute,
             private router: Router,
             private accuntCache: AccountCacheService,
             private expenseService: ExpenseService,
             private giphyService: GiphyService) {
 }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.expenseService.get(id).subscribe((expense: any) => {
        if (expense) {
          this.expense = expense;
          this.expense.href = expense._links.self.href;
          this.giphyService.get(expense.name).subscribe(url => expense.giphyUrl = url);
        } else {
          console.log(`Expense with id '${id}' not found, returning to list`);
          this.gotoList();
        }
      });
    }
  });
    this.accounts = this.accuntCache.getAccountList();
  }
  ngOnDestroy() {
  this.sub.unsubscribe();
}


  gotoList() {
    this.router.navigate(['/expense-list']);
  }

  save() {


    this.expenseService.save(this.expense).subscribe(result => {
      console.log('saving: ' + this.expense)
      this.gotoList();
    }, error => console.log(error));
  }

  remove(href) {
    this.expenseService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  switchAbrechnung() {
    console.log(this.selected);
 }

}
