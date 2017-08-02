import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CurrentAccount} from "../../models/current-account.model";

@Component({
  selector: 'app-current-account',
  templateUrl: 'current-account.component.html',
  styleUrls: ['current-account.component.css']
})
export class CurrentAccountComponent implements OnInit {
  @Input() currentAccount: CurrentAccount;
  @Output() addToHistory = new EventEmitter();
  withdrawalAmount: number = 0;
  depositAmount: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  withdraw(amount) {
    // form Validation

    if (amount <= 0) {
      alert('number must be positive')
    } else if ((this.currentAccount.balance - amount < -this.currentAccount.overdraft)) {
      alert('overdraft limit exceded');
    } else {
      this.currentAccount.balance -= amount;
      this.addToHistory.emit({
        type: 'withdraw',
        amount: amount,
        date: Date.now()
      });
      console.log('emit')
    }
  }

  deposit(amount) {
    // form Validation

    console.log(amount);
    if (amount <= 0) {
      alert('number must be positive');
    } else {
      this.currentAccount.balance += amount;
      this.addToHistory.emit({
        type: 'deposit',
        amount: amount,
        date: Date.now()
      });
    }
  }

}
