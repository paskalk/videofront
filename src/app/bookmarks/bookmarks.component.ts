import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  @Input()  urlInput: String;
  @Input()  originalUrl: string;

  allowPlay = true;
  bookmarksVisible = false;

  bookmarksList = this.getFromLocalStorage("bookmarks");

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(historyItem) {
    this.urlInput = historyItem;
  } 

  addBookmark(){
    this.saveToLocalStorage("bookmarks", this.originalUrl);
  }

  showBookmarks(){
    this.bookmarksVisible = this.bookmarksVisible === false ? true : false;
  }

  getFromLocalStorage(key){
    let list = JSON.parse(localStorage.getItem(key)) || [];
    return list;
  }

  saveToLocalStorage(key, value){
    let list = this.getFromLocalStorage(key);
    if (!list.includes(value)){
        list.push(value);
    }
    
    localStorage.setItem(key, JSON.stringify(list));
}

}
