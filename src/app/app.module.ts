import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

import { FormsModule } from '@angular/forms';
import { UrlhistoryService } from './urlhistory.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UrlhistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
