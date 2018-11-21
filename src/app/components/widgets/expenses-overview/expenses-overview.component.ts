import { Component, OnInit } from '@angular/core';
import { AccountOverview } from '../../../shared/dto/account-overview';
import { ExpenseService } from '../../../shared/expense/expense.service';
import { AccountDTO } from '../../../shared/dto/accountDTO';
import { AccountCacheService } from '../../../shared/service/cache/account-cache.service';
import { ChartDataModel, SerieModel } from '../../../shared/dto/chartBarModel';



// TODO  OMG I NEED TO organize modules.....

@Component({
  selector: 'app-expenses-overview',
  templateUrl: './expenses-overview.component.html',
  styleUrls: ['./expenses-overview.component.scss']
})
export class ExpensesOverviewComponent implements OnInit {

  overview: any;
  selectedAccount = 1;


  accountData: ChartDataModel = {
    data: []
  };

  // options
  showXAxis = false;
  showYAxis = true;
  barPadding = 25;
  gradient = false;
  showLegend = true;
  showRefLabels = false;
  showXAxisLabel = false;
  showYAxisLabel = true;
  yAxisLabel = 'amount';

  colorScheme = 'night';

  constructor(private cacheService: AccountCacheService) {
    Object.assign(this.accountData);
   }


  ngOnInit() {
    // do some init data
   // this.overview = new AccountOverview();
    this.cacheService.getGlobalOverview().subscribe(data => {
      console.log('overview done');
    this.overview = data;


    // if we have overview, why not display it?
    if (this.overview.overview) {
        const inhalt = this.overview.overview;
        console.log(inhalt);
        for (const monthlyAmounts of inhalt) {
          if (monthlyAmounts.accountId === this.selectedAccount) {
            if ( monthlyAmounts.overviews) {
              for (const monthentry of monthlyAmounts.overviews) {
                this.accountData.data.push(new SerieModel(monthentry.month, monthentry.amount));
              }
            }
            this.accountData.data = [...this.accountData.data];
          }
        }
    }

    console.log('done');
   });
  }

  onSelect(event) {
    console.log(event);
  }

}

