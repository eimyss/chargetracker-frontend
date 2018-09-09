import { Expense } from '../dto/expense';

export const expenses: Expense[] = [
  { id: 10, name: 'Bier', betrag: 11.4, ort: "Bingen", href: "", expensable: true, type: "Food", account: "Konto-1",accountId: 10, expenseDate: "01/02/2018", createDate: "01/02/2018",giphyUrl: "" },
  { id: 11, name: 'Essen', betrag: 11.4,ort: "FFM"  , href: "", expensable: true, type: "Food", account: "Konto-1",accountId: 10, createDate: "01/02/2018", expenseDate: "01/02/2018",giphyUrl: "" },
  { id: 12, name: 'diesel', betrag: 11.4, ort: "Bonn"  , href: "", expensable: true, type: "Food", account: "Konto-1",accountId: 11, createDate: "01/02/2018", expenseDate: "01/02/2018",giphyUrl: "" }

];
