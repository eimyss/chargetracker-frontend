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
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
MatSortModule, MatTableModule } from "@angular/material";
import { ExpensesOverviewComponent } from './expenses-overview/expenses-overview.component';


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
  redirectUri: 'http://' + window.location.hostname +':' +window.location.port +  '/implicit/callback',
  clientId: '0oaepwz9ykeNaSuWK0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseEditComponent,
    HomeComponent,
    ExpensesOverviewComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatCardModule,
     MatInputModule,
     MatListModule,
     MatTableModule,
     MatGridListModule,
     MatToolbarModule,
     MatInputModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
MatProgressSpinnerModule,
     FormsModule,
  RouterModule.forRoot(appRoutes),
     OktaAuthModule.initAuth(config)
  ],
  providers: [ExpenseService,EnvironmentService,GiphyService,  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
