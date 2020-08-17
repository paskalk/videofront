import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { UrlhistoryService } from '../urlhistory.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit, OnChanges {
  @Input()  urlInput: string;
  @Output() urlToPlay = new EventEmitter<string>();

  historyList = [];

  constructor(private _urlhistoryService: UrlhistoryService){ }

  ngOnInit(): void {
    // Load from localStorage as we wait for API call
    this.historyList = this._urlhistoryService.getFromLocalStorage("history");

    this.updateHistory();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.urlInput && this.urlInput !== ""){
      this.updateHistory();  
    }
  }

  onSelect(historyItem) {
    this.urlToPlay.emit(historyItem);
  }

  updateHistory(){ 
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


}
