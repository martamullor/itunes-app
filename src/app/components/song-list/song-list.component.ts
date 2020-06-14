import { Component, OnInit } from '@angular/core';

import { ItunesService } from './../../services/itunes.service';

import { Song } from './../../models/song';

@Component({
  selector: 'song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})

export class SongListComponent implements OnInit {

  songs: Song[] ;

  constructor(private _itunesService: ItunesService) { }

  ngOnInit() {
    this.songs = this._itunesService.songs;
    }

    getSongs(){
      debugger;
      this.songs = this._itunesService.songs;
    return this.songs;
    }
 
}
