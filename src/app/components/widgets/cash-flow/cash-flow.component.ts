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



  // options
  showXAxis = false;
  showYAxis = true;
  gradient = true;
  roundDomains = true;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Zeit';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';
  timeline = true;

  colorScheme = 'night';

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
  onSelect(event) {
    console.log(event);
  }


}
