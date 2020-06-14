import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from './../../services/itunes.service';
import { FavouriteService } from './../../services/favourite.service';


@Component({
  selector: 'ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.css']
})
export class IonSearchbarComponent implements OnInit {

  @Input('input')
  inputArtist;
  public selectedArtist: any = [];
  favourites = false;

  constructor( private _itunesService: ItunesService, private _favouriteService: FavouriteService) { }

  ngOnInit() {}

  searchArtist(){
    //call service and send Artist Name
    this._itunesService.setArtistUrl(this.inputArtist);
  }

  favourite(){
    return this.favourites;
  }
  
  getFavourites(){
    return this._favouriteService.favItems;
  }

  
}