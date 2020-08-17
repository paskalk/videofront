import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { UrlhistoryService } from '../urlhistory.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit, OnChanges {
  @Input()  urlInput: string;
  @Output() urlToPlay = new EventEmitter<string>();

  enableAdd = false;
  bookmarksVisible = false;
  bookmarksList = [];
  bookmarksCount = 0;

  constructor(private _urlhistoryService: UrlhistoryService){ }

  ngOnInit(): void {
    this.bookmarksList = this._urlhistoryService.getFromLocalStorage("bookmarks");
    this.bookmarksCount = this.bookmarksList.length;
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.urlInput && this.urlInput !== ""){
      this.enableAdd = true;
    } else {
      this.enableAdd = false;
    }
  }

  onSelect(historyItem) {
    this.urlToPlay.emit(historyItem);
  } 

  addBookmark(){
    this._urlhistoryService.saveToLocalStorage("bookmarks", this.urlInput);
    this.bookmarksList = this._urlhistoryService.getFromLocalStorage("bookmarks");
    this.bookmarksCount = this.bookmarksList.length;
  }

  showBookmarks(){
    this.bookmarksVisible = this.bookmarksVisible === false ? true : false;
  }
}
