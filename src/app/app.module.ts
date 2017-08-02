import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrentAccountComponent } from './components/current-account/current-account.component';
import { SavingAccoutComponent } from './components/saving-accout/saving-account.component';
import { AccountTableComponent } from './components/account-table/account-table.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentAccountComponent,
    SavingAccoutComponent,
    AccountTableComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
