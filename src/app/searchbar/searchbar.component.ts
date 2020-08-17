import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
    @Input() urlInput: string;
    @Output() urlToPlay = new EventEmitter<string>();

    constructor(){ }

    ngOnInit() {
        
    }

    onAddressChange(event: Event) {
        
    }

    onEnterOrBlur(txtAddress: string) {
        if (txtAddress && txtAddress !== ""){
            this.urlInput = txtAddress;
            this.urlToPlay.emit(txtAddress);         
        }
    }
}
