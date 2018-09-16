import {AccountDTO} from './accountDTO';
import { Expense } from './expense';


export class AccountOverview {
  monthback: number;
  createDate: string;
  userid: number;
  overview: any[];
  unexpenced: Expense[];
}
