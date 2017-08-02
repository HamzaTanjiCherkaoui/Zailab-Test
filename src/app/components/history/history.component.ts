import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() history: History[];

  constructor() {
  }

  ngOnInit() {
    // The array needs to be revers to show last oprations first
    this.history.reverse()
  }


}
