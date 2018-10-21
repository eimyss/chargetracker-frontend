import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../shared/expense/expense.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  textValue = 'initial value';
antwort = 'response';

  constructor(private expenseService: ExpenseService) { }

testApi() {
  console.log(this.textValue);
  this.expenseService.performTest(this.textValue).subscribe(data => {
  console.log(data);
  this.antwort=data;
}, error => {
        console.log(error);
      },
      () => {
        console.log('done');
      }
 );

}

  ngOnInit() {
  }

}
