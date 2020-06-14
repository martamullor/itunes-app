import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonSearchbarComponent } from './components/ion-searchbar/ion-searchbar.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { CardSongComponent } from './components/card-song/card-song.component';

import { ItunesService } from './services/itunes.service';

@NgModule({
  declarations: [
    AppComponent,
    IonSearchbarComponent,
    SongListComponent,
    CardSongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, ItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
