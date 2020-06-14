import { Component, OnInit, Input } from '@angular/core';
import { Song } from './../../models/song';

@Component({
  selector: 'card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent implements OnInit {
  @Input()
  song: Song;
  img: string;
  constructor() { }

  ngOnInit() {
  }
}
