import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public urlInput: string;
  public historyList = [];

  onUrlReady(url: string){
    this.urlInput = url;
  }

  onListUpdated(list: Array<string>){
    this.historyList = list;
  }

}
