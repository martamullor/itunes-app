import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent implements OnInit {
  title: string ="Title";
  album: string= "Album";
  img: string ="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  constructor() { }

  ngOnInit() {
  }

}
