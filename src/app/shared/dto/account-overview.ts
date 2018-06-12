import {AccountDTO} from './accountDTO';


export class AccountOverview {
  total: number;
  active: boolean;
  name: string;
  countExpenses: number;
  refAccount: AccountDTO;
}
