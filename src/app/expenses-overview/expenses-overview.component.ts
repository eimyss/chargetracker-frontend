import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../shared/expense/expense.service';
import { AccountOverview} from '../shared/dto/account-overview';
import { AccountDTO } from '../shared/dto/accountDTO';


// TODO  OMG I NEED TO organize modules.....

@Component({
  selector: 'app-expenses-overview',
  templateUrl: './expenses-overview.component.html',
  styleUrls: ['./expenses-overview.component.css']
})
export class ExpensesOverviewComponent implements OnInit {


overview : AccountOverview;

  constructor(private expenseService: ExpenseService) { }


  ngOnInit() {
    // do some init data
    this.overview = new AccountOverview();
      this.overview.active = false;
      this.overview.countExpenses = 1;
      this.overview.total=0;
      this.overview.refAccount= new AccountDTO();
      this.overview.refAccount.name="loading"
    this.expenseService.getOverview().subscribe(data => {
      console.log('overview done');
      this.overview = data;
   });
  }

}
