import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SavingAccount} from "../../models/saving-account.model";

@Component({
  selector: 'app-saving-accout',
  templateUrl: 'saving-account.component.html',
  styleUrls: ['saving-account.component.css']
})
export class SavingAccoutComponent implements OnInit {
  @Input() savingAccount: SavingAccount;
  @Output() addToHistory = new EventEmitter();

  withdrawalAmount: number = 0;
  depositAmount: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  // deposit function

  withdraw(amount) {
    // form Validation
    if (amount <= 0) {
      alert('number must be positive')

    } else if ((this.savingAccount.balance - amount) < this.savingAccount.minimumBalance) {
      alert('must keep at least R' + this.savingAccount.minimumBalance + ' in the account, the operation would result in R' + ( this.savingAccount.balance - amount));
    } else {
      this.savingAccount.balance -= amount;
      this.addToHistory.emit({
        type: 'withdraw',
        amount: amount,
        date: Date.now()
      });
      console.log('emit')
    }
  }
  // deposit function
  deposit(amount) {

    // form Validation
    if (amount <= 0) {
      alert('number must be positive')
    } else if (amount < this.savingAccount.minimumDeposit) {
      alert('Deposit amount must be at least R' + this.savingAccount.minimumDeposit);
    } else {
      this.savingAccount.balance += amount;
      this.addToHistory.emit({
        type: 'deposit',
        amount: amount,
        date: Date.now()
      });
    }
  }


}
