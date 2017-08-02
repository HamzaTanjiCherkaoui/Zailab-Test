import {History} from "./History.model";
export class SavingAccount {
  balance: number;
  id: number;
  minimumBalance: number;
  minimumDeposit: number;
  history: History[]
}
