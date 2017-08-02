import {Component, OnInit} from '@angular/core';
import {Account} from "./models/account.model";
import {UsersAccounts} from "./mockData/Accounts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: Account[] = UsersAccounts;
  selectedAccount: Account = this.accounts[0];


  ngOnInit() {
    console.log(this.accounts[0]);
    console.log(this.selectedAccount);
  }



}
