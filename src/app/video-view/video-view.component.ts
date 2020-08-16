import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  @Input()  urlInput: SafeUrl;
  // public videoAddress: SafeUrl;

  // @Output() url = new EventEmitter<string>();
  allowPlay = false;

  constructor(public sanitizer: DomSanitizer){
    
  }



  ngOnInit(): void {
    
  }

  // ngOnChanges(changes: SimpleChanges):void {
  //   // alert('changeFelt');
  // }


  // onPressPlay(){
        
  //   // this.saveToLocalStorage("history", this.urlInput.trim());
  //   let newUrl = `https://www.youtube.com/embed/${this.convertURL(this.urlInput.trim())}`;
  //   this.videoAddress = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
  // } 

  // convertURL(url){
  //   var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  //   var match = url.match(regExp);
    
  //   if (match && match[2].length == 11) {
  //       return match[2];
  //   } else {
  //       console.log('Invalid input entered.')
  //       return 'zWh3CShX_do';
  //   }
  // }

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
