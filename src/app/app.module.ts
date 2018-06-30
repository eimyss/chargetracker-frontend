import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { ExpenseService } from './shared/expense/expense.service';
import { EnvironmentService } from './shared/environment/environment.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GiphyService } from './shared/giphy/giphy.service';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
MatSortModule, MatTableModule } from "@angular/material";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ExpensesOverviewComponent } from './expenses-overview/expenses-overview.component';
import { ExpensesSearchComponent } from './expenses-search/expenses-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { CashFlowComponent } from './components/widgets/cash-flow/cash-flow.component';
import { CreateNewItemComponent } from './components/widgets/create-new-item/create-new-item.component';
import { CalendarPage } from './pages/calendar-page/calendar-page.component';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from '../demo-utils/module';
import { LowerToolbarComponent } from './components/shared/lower-toolbar/lower-toolbar.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {
    path: 'expense-list',
    component: ExpenseListComponent
  },
  {
    path: 'expense-add',
    component: ExpenseEditComponent
  },
  {
   path: 'home',
   component: HomeComponent
 },
 {
  path: 'calendar-overview',
  component: CalendarPage
},
  {
    path: 'expense-edit/:id',
    component: ExpenseEditComponent
  },
  {
   path: 'implicit/callback',
   component: OktaCallbackComponent
 }
];

const config = {
  issuer: 'https://dev-463008.oktapreview.com/oauth2/default',
  redirectUri: 'http://' + "localhost"+':' +"4200" +  '/implicit/callback',
  clientId: '0oaepwz9ykeNaSuWK0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseEditComponent,
    HomeComponent,
    ExpensesOverviewComponent,
    ExpensesSearchComponent,
    DashboardPageComponent,
    ToolbarComponent,
    CashFlowComponent,
    CreateNewItemComponent,
    CalendarPage,
    LowerToolbarComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     DemoUtilsModule,
     ChartsModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
    NgbModalModule.forRoot(),
     CalendarModule.forRoot(),
     MatButtonModule,
     MatCardModule,
     MatListModule,
     MatTableModule,
     MatGridListModule,
     MatMenuModule,
     MatDatepickerModule,
     MatToolbarModule,
     MatInputModule,
   MatTableModule,
   MatAutocompleteModule,
   MatPaginatorModule,
   MatSortModule,
MatProgressSpinnerModule,
     FormsModule,
  RouterModule.forRoot(appRoutes),
     OktaAuthModule.initAuth(config)
  ],
  providers: [ExpenseService,EnvironmentService,GiphyService,  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
