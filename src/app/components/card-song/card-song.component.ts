import { Component, OnInit, Input } from '@angular/core';
import { Song } from './../../models/song';
import { FavouriteService} from './../../services/favourite.service'


@Component({
  selector: 'card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent implements OnInit {
  @Input()
  song: Song;
  img: string;
  favourite: boolean = false;
  constructor( private _favouriteService: FavouriteService) { }

  ngOnInit() {
  }

  isFavourite(selectedSong){
    if( ! this.favourite){
      this._favouriteService.addFavourite(selectedSong);
      this.favourite = true;
    } else if (this.favourite){
      this._favouriteService.removeFavourite(selectedSong);
      this.favourite = false;
    }
  }
}
