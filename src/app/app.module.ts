import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExpenseService } from './shared/expense/expense.service';
import { EnvironmentService } from './shared/environment/environment.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GiphyService } from './shared/giphy/giphy.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule
} from "@angular/material";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { CashFlowComponent } from './components/widgets/cash-flow/cash-flow.component';
import { CreateNewItemComponent } from './components/widgets/create-new-item/create-new-item.component';
import { CalendarPage } from './pages/calendar-page/calendar-page.component';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from '../demo-utils/module';
import { LowerToolbarComponent } from './components/shared/lower-toolbar/lower-toolbar.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { TestingComponent } from './components/shared/testing/testing.component';
import { AccountDetailedComponent } from './pages/accounts/account-detailed/account-detailed.component';
import { environment } from '../environments/environment';
import { AccountService } from './shared/service/account.service';
import { KeycloakService } from './shared/service/keycloack.service';
import { BackendInfoPageComponent } from './pages/admin/backend-info-page/backend-info-page.component';
import { BackendInfoServiceService } from './shared/service/backend/backend-info-service.service';
import { ExpensesNavigationComponent } from './expenses-navigation/expenses-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ExpensesDashboardComponent } from './expenses-dashboard/expenses-dashboard.component';
import { AccountTableComponent } from './components/tables/account-table/account-table.component';
import { ExpenseListComponent } from './components/tables/expense-list/expense-list.component';
import { ExpenseEditComponent } from './pages/expenses/expense-edit/expense-edit.component';
import { ExpensesOverviewComponent } from './components/widgets/expenses-overview/expenses-overview.component';
import { ExpensesSearchComponent } from './components/widgets/expenses-search/expenses-search.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

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
    component: ExpensesDashboardComponent
  },
  {
    path: 'account/list',
    component: AccountTableComponent
  },
  {
    path: 'backend/info',
    component: BackendInfoPageComponent
  },
  {
    path: 'account/create',
    component: AccountDetailedComponent
  },
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: 'calendar-overview',
    component: CalendarPage
  },
  {
    path: 'expense-edit/:id',
    component: ExpenseEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseEditComponent,
    HomeComponent,
    ExpensesOverviewComponent,
    ExpensesSearchComponent,
    DashboardPageComponent,
    CashFlowComponent,
    CreateNewItemComponent,
    CalendarPage,
    LowerToolbarComponent,
    CreatePageComponent,
    TestingComponent,
    AccountDetailedComponent,
    BackendInfoPageComponent,
    ExpensesNavigationComponent,
    ExpensesDashboardComponent,
    AccountTableComponent
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
    MatSelectModule,
    MatTableModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [KeycloakService, ExpenseService, AccountService,BackendInfoServiceService, EnvironmentService, GiphyService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],

  bootstrap: [AppComponent],

})
export class AppModule { }
