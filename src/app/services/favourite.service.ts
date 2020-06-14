import { Injectable } from '@angular/core';

import { Song } from './../models/song'

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favSongs: Song[] = [];
  favItems: number = 0;

  constructor() { }

  addFavourite(selectedSong){
    this.favSongs.push(selectedSong);
    this.favItems = this.favSongs.length;
  }

  removeFavourite(selectedSong){
    // Identify the song
    for (let i = 0 ; i < this.favSongs.length ; i++){
    // Remove the song that match
      if(this.favSongs[i].trackId == selectedSong.trackId){
        this.favSongs.splice(i, 1);
        this.favItems = this.favSongs.length;
      }
    }
  }
 
}
