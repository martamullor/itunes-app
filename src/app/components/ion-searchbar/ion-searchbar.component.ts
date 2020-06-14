import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from './../../services/itunes.service';


@Component({
  selector: 'ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.css']
})
export class IonSearchbarComponent implements OnInit {

  @Input('input')
  inputArtist;
  public selectedArtist: any = [];

  constructor( private _itunesService: ItunesService) { }

  ngOnInit() {}

  searchArtist(){
    //call service and send Artist Name
    this._itunesService.setArtistUrl(this.inputArtist);
  }
  
}