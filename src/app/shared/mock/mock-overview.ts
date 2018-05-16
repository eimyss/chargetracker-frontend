import { AccountOverview } from '../dto/account-overview';
import { AccountDTO } from '../dto/accountDTO';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {mockedAccount} from './mock-account';

export const MockedOverview: AccountOverview = {
name: "mocked", total: 5, active: true, countExpenses: 10, refAccount: new AccountDTO(1,'test')};
