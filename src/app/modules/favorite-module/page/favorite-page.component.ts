import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistObject } from '../../home-module/models/artist-object';
import { SimplifiedAlbumObject } from '../../home-module/models/simplified-album-object';
import { TrackObject } from '../../home-module/models/track-object';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  artistItems: ArtistObject[] = [];
  tracksItems: TrackObject[] = [];
  albumsItems: SimplifiedAlbumObject[] = [];
  favorites: any[]= [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(){
    let _localStorage = JSON.parse(localStorage.getItem('Favoritos') || '[]');
    if(_localStorage == null) _localStorage = [];
    
    if(_localStorage.length){
      _localStorage.forEach((element: ArtistObject | TrackObject | SimplifiedAlbumObject) => {
        element.favorito = true;
        
        if(element.type == 'artist') this.artistItems.push(element);
        if(element.type == 'track') this.tracksItems.push(element);
        if(element.type == 'album') this.albumsItems.push(element);
      });
    }
    
  }


}
