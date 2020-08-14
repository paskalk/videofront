import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, } from '@angular/platform-browser';
@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html'
})
export class SearchbarComponent implements OnInit {

    urlInput = '??';
    allowPlay = false;
    public videoAddress: SafeUrl;
    
 

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
        // function getId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            console.log(match);
            if (match && match[2].length == 11) {
                return match[2];
            } else {
                console.log('Invaid input entered.')
                return 'zWh3CShX_do';
            }
    }

    onPressPlay(){
        let newUrl = `https://www.youtube.com/embed/${this.convertURL(this.urlInput)}`;
        alert(newUrl);
        this.videoAddress = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
        // this.videoAddress = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(this.urlInput));
        //  alert(this.videoAddress);
    }
}
