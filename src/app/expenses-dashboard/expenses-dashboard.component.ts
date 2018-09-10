import { Component } from '@angular/core';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';

@Component({
  selector: 'ExpensesdashboardComponent',
  templateUrl: './expenses-dashboard.component.html',
  styleUrls: ['./expenses-dashboard.component.css']
})
export class ExpensesDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1, component: DashboardPageComponent },
    { title: 'Card 2', cols: 1, rows: 1, component: DashboardPageComponent  },
    { title: 'Card 3', cols: 1, rows: 2 , component: DashboardPageComponent },
    { title: 'Card 4', cols: 1, rows: 1 , component: DashboardPageComponent }
  ];
}
