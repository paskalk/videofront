import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, } from '@angular/platform-browser';
@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

    urlInput = '';
    allowPlay = false;
    public videoAddress: SafeUrl;

    historyList = this.getFromLocalStorage("history");
    
 

    constructor(public sanitizer: DomSanitizer){

    }

    ngOnInit() {
        
    }

    onAddressChange(event: Event) {
        this.urlInput = (<HTMLInputElement>event.target).value;
        
        if (this.urlInput !== ""){
            this.allowPlay = true;
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

    onPressPlay(){
        
        this.saveToLocalStorage("history", this.urlInput.trim());
        let newUrl = `https://www.youtube.com/embed/${this.convertURL(this.urlInput.trim())}`;
        this.videoAddress = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
        // this.videoAddress = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(this.urlInput));
        //  alert(this.videoAddress);

        //
        
    }


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




    onSelect(historyItem) {
        // alert(historyItem);
        // this.selectedHistoryItem = historyItem;
        this.urlInput = historyItem;
        this.onPressPlay();
    }


}
