import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../shared/service/account.service';
import { ChartSeriesModel, SeriesModel } from '../../../shared/dto/chartseriesModel';
import {multi} from './multi';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {

  selectedAccount = 1;
  accountName = 'Active Konto';
  receivedData: any;

  accountData: ChartSeriesModel = {
    data: [
      {
        name: 'Konto 1',
        series: [{
          name: 'test',
          value: 5
        },
        {
          name: 'another',
          value: 4
        }],
      },
    ],
  };


  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area 
  autoScale = true;

  constructor(private accountService: AccountService) {
    // debug whats the difference
    Object.assign(this.accountData);

  }

  ngOnInit() {

    this.accountService.getHistoryForAccount(this.selectedAccount).subscribe(data => {
      this.receivedData = data;
      for (const days of this.receivedData) {
        if (days.createDate && days.amount) {
          console.log('pushing : ' + days.createDate + ' and ' + days.amount);
        this.accountData.data[0].series.push(({name:  days.createDate, value: days.amount}));
       // this.multi.series.push(new SeriesModel( days.createDate, days.amount));
        } else  {
          console.log('item is empty: ' + days);
        }
      }
    this.accountData.data = [...this.accountData.data];
    });

  }

}
