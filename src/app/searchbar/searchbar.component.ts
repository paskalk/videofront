import { Component, OnInit, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, } from '@angular/platform-browser';


@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

    // originalUrl = '';
    // urlInput = '';
    
    // public videoAddress: SafeUrl;
    // public urlInput: SafeUrl;

    @Input() originalUrl: string;
    @Input() urlInput: SafeUrl;

    allowPlay = false;

    historyList = this.getFromLocalStorage("history");
    bookmarksList = this.getFromLocalStorage("bookmarks");
    
    
 

    constructor(public sanitizer: DomSanitizer){

    }

    ngOnInit() {
        
    }

    onAddressChange(event: Event) {
        this.originalUrl = (<HTMLInputElement>event.target).value;
        
        if (this.originalUrl && this.originalUrl.trim() !== ""){
            this.allowPlay = true;

            

            let videoId = this.convertURL(this.originalUrl.trim());
            this.saveToLocalStorage("history", videoId);
            let newUrl = `https://www.youtube.com/embed/${videoId}`;
            this.urlInput = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
        }
        
    }

    convertURL(url){
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            console.log('Invalid input entered.')
            return 'zWh3CShX_do';
        }
    }

    // onPressPlay(){
    //     this.saveToLocalStorage("history", this.urlInput.trim());
    //     let newUrl = `https://www.youtube.com/embed/${this.convertURL(this.urlInput.trim())}`;
    //     this.videoAddress = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
    // }


    saveToLocalStorage(key, value){
        let list = this.getFromLocalStorage(key);
        if (!list.includes(value)){
            list.push(value);
        }
        
        localStorage.setItem(key, JSON.stringify(list));
    }

    getFromLocalStorage(key){
        let list = JSON.parse(localStorage.getItem(key)) || [];
        return list;
    }




    // onSelect(historyItem) {
    //     this.urlInput = historyItem;
    //     // this.onPressPlay();
    // }

    // addBookmark(){
    //     alert('add bookmark clicked');
    // }


}
