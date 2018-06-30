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

public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
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
      this.overview.refAccount= new AccountDTO(1,"loading");
      this.overview.refAccount.name="loading"
    this.expenseService.getOverview().subscribe(data => {
      console.log('overview done');
      this.overview = data;
   });
  }

}
