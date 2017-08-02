import {CurrentAccount} from "./current-account.model";
import {SavingAccount} from "./saving-account.model";
export class Account {
  name: string;
  currentAccount: CurrentAccount[];
  savingAccount: SavingAccount[];
}
