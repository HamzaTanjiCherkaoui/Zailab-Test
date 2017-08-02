import {Component, OnInit, Input} from '@angular/core';
import {AccountUi} from "../../models/accountUi.model";

@Component({
  selector: 'app-account-table',
  templateUrl: 'account-table.component.html',
  styleUrls: ['account-table.component.css']
})
export class AccountTableComponent implements OnInit {
  @Input() Acounts: AccountUi;
  displayHistory = false;
  selectedHistory = [];

  constructor() {
  }

  ngOnInit() {
  }

  toggleAccount(account) {
    // Opens the operation tab

    if (account.open) {
      account.open = false;
    } else {
      account.open = true;
    }
  }

  addToHistory(event, account) {
    // Add event to account history

    account.history.push(event);
  }

  showHistory(history) {
    //open History modal

    this.selectedHistory = history;
    this.displayHistory = true;
  }

  closeModal(){
    this.displayHistory = false
  }
}
