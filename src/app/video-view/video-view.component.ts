import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, } from '@angular/platform-browser';
import { UrlhistoryService } from '../urlhistory.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit, OnChanges {

  @Input()  urlInput: string;
  @Input()  historyList: Array<string>;
  urlToPlay: SafeUrl;

  allowPlay = false;

  constructor(private sanitizer: DomSanitizer, private _urlhistoryService: UrlhistoryService){ }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.urlInput && this.urlInput !== ""){

      this._urlhistoryService.saveToLocalStorage("history", this.urlInput);
      
      let videoId = this.convertURL(this.urlInput);      
      let newUrl = `https://www.youtube.com/embed/${videoId}`;

      this._urlhistoryService.saveToDatabase(newUrl)
          .subscribe(data => {
            console.log('received ..... ', data);
            if (this.historyList){
              this.historyList.unshift(this.urlInput);
            } 
            
            
          });

      this.urlToPlay = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
    }    
  }

  convertURL(url){
    console.log('++++++', url);
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        console.log('Invalid input entered.')
        return 'zWh3CShX_do';
    }
  }

}





















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-video-view',
//   templateUrl: './video-view.component.html',
//   styleUrls: ['./video-view.component.css']
// })
// export class VideoViewComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
