import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input()  originalUrl: string;
  historyList = this.getFromLocalStorage("history");

  constructor() { }

  ngOnInit(): void {
  }

  getFromLocalStorage(key){
    let list = JSON.parse(localStorage.getItem(key)) || [];
    return list;
  }

  onSelect(historyItem) {
    this.originalUrl = historyItem;
    // this.onPressPlay();
}


}
