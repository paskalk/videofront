import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { UrlhistoryService } from '../urlhistory.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit, OnChanges {

  @Input()  urlInput: string;
  urlToPlay: SafeResourceUrl;

  allowPlay = false;

  constructor(private sanitizer: DomSanitizer, private _urlhistoryService: UrlhistoryService){ }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.urlInput && this.urlInput !== ""){

      this._urlhistoryService.saveToLocalStorage("history", this.urlInput);
      
      let videoId = this.convertURL(this.urlInput);      
      let newUrl = `https://www.youtube.com/embed/${videoId}`;

      this._urlhistoryService.saveToDatabase(this.urlInput)
          .subscribe(data => console.log(data));

      this.urlToPlay = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);

      // //Use this to fix the unsafe error
      // this.urlToPlay = newUrl;
    }    
  }

  convertURL(url){
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        console.log('Invalid input entered.');
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
