import {UserDTO} from './UserDTO';

export class AccountDTO {
  id: number;
  name: string;
  bank: string;
  businessAccount: boolean;
  active: boolean;
  expensescount: number;
  createDate: Date;
  expireDate: Date;
  user: UserDTO;


}
