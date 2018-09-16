import { Component, OnInit } from '@angular/core';
import { AccountOverview } from '../../../shared/dto/account-overview';
import { ExpenseService } from '../../../shared/expense/expense.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';



// TODO  OMG I NEED TO organize modules.....

@Component({
  selector: 'app-expenses-overview',
  templateUrl: './expenses-overview.component.html',
  styleUrls: ['./expenses-overview.component.scss']
})
export class ExpensesOverviewComponent implements OnInit {


overview : AccountOverview;

public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false
};
public barChartLabels:string[] = ['KW10', 'KW11', 'KW12', 'KW13', 'KW14', 'KW15', 'KW16'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [10, 8, 10, 0, 10, 40, 10], label: 'Essen'},
  {data: [20, 15, 15, 15, 35, 15, 15], label: 'Fahrkosten'},
  {data: [0, 200, 0, 0, 50, 15, 0], label: 'Sonstige Ausgaben'},
  {data: [0, 0, 0, 100, 0, 0, 90], label: 'Private Ausgaben'}

];

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

public randomize():void {
  // Only Change 3 values
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
   */
}

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
