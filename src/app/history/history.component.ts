import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UrlhistoryService } from '../urlhistory.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  @Input()  urlInput: string;
  @Input()  historyList: Array<string>;
  @Output() urlToPlay = new EventEmitter<string>();

  constructor(private _urlhistoryService: UrlhistoryService){ }

  ngOnInit(): void {
    // this.historyList = this._urlhistoryService.getFromLocalStorage("history");

    this._urlhistoryService.getHistoryFromDatabase()
      .subscribe( data => {
        let arr = [];
        for (let item of data){
          if (item){
            arr.push(item.address);
          }
        }
        
        this.historyList = arr.reverse();

        localStorage.setItem("history", JSON.stringify(this.historyList));
      });
  }

  onSelect(historyItem) {
    this.urlToPlay.emit(historyItem);
  }


}
