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
import { CookieLawModule } from 'angular2-cookie-law';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatBadgeModule,
  MatSortModule, MatTableModule, MatDatepickerModule,
  MatNativeDateModule, MatButtonModule, MatCardModule, MatListModule,
  MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatRadioModule
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CashFlowComponent } from './components/widgets/cash-flow/cash-flow.component';
import { CreateNewItemComponent } from './components/widgets/create-new-item/create-new-item.component';
import { CalendarPage } from './pages/calendar-page/calendar-page.component';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from '../demo-utils/module';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { ProjectTableComponent } from './components/tables/project-table/project-table.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectsComponent } from './pages/project/projects.component';
import { BookingsComponent } from './pages/project/bookings/bookings.component';
import { BookingTableComponent } from './components/tables/booking-table/booking-table.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {
  MatButtonToggleModule,
  MatSlideToggleModule, MatDialogModule, MatSnackBarModule,
  MatTooltipModule, MatRippleModule,
  MatSliderModule
} from '@angular/material';
import {
  CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule
} from '@covalent/core';
import { PortalModule } from '@angular/cdk/portal';
import { CovalentTabSelectModule } from '@covalent/core/tab-select';
import { TransactionTableComponent } from './components/tables/transaction-table/transaction-table.component';

const appRoutes: Routes = [
  //  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '',
    component: ExpensesDashboardComponent
  },
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
    path: 'project-info/:id',
    component: ProjectsComponent
  },
  {
    path: 'adress-demo',
    component: ProjectListingComponent
  },
  {
    path: 'project/list',
    component: ProjectTableComponent
  },
  {
    path: 'booking/list',
    component: BookingTableComponent
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
  },
  {
    path: 'booking-edit/:id',
    component: BookingsComponent
  },
  {
    path: 'account-edit/:id',
    component: AccountDetailedComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    BookingsComponent,
    ExpenseEditComponent,
    HomeComponent,
    ExpensesOverviewComponent,
    CashFlowComponent,
    CreateNewItemComponent,
    CalendarPage,
    CreatePageComponent,
    TestingComponent,
    AccountDetailedComponent,
    BackendInfoPageComponent,
    ExpensesNavigationComponent,
    ExpensesDashboardComponent,
    AccountTableComponent,
    ProjectsComponent,
    ProjectTableComponent,
    TransactionTableComponent,
    BookingTableComponent,
    ProjectListingComponent,
    BookingsComponent
  ],
  imports: [
        BrowserModule,
    HttpClientModule,
    DemoUtilsModule,
    CovalentTabSelectModule,
    CookieLawModule,
    ChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    NgxChartsModule,
    NoopAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    PortalModule,
    MatGridListModule,
    MatBadgeModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatSliderModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    MatSortModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatRadioModule

  ],
  providers: [KeycloakService, ExpenseService, AccountService,
    BackendInfoServiceService, EnvironmentService, GiphyService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],

  bootstrap: [AppComponent],

})
export class AppModule { }
