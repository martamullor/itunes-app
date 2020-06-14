import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Song } from '../models/song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItunesService {

  private url: string = "https://itunes.apple.com/search?entity=song&term="
  private artistKey:string = "";
  public songs: Song[];
  constructor( private _http: HttpClient) { }

  getSongs() : Observable<any>{
    return this._http.get(this.url+this.artistKey);
  }

//collects the JSON result from itunes through an Obserbable
  saveSongs(){
    this.getSongs().subscribe(
      result =>{
        this.songs = result['results'];
        console.log(this.songs = result['results']);
    }, error => {
      console.log(<any>error);
    }) ;
  }

  setArtistUrl(inputArtist: string){
    this.getArtistKey(inputArtist);
    this.saveSongs();
  }
  
//Transforms input into the key to link to the url
  getArtistKey(inputArtist){
    inputArtist = inputArtist.toLowerCase()
    var artist = inputArtist.split(" ");
    var str:string = "";
    if(artist.length > 1){
      for (var i=0; i<artist.length; i++){
        str += artist[i]+ "+";
        }
        str = str.substring(0, str.length - 1);
    } else {
      str = inputArtist;
    } 
    this.artistKey = str;
  }

}



