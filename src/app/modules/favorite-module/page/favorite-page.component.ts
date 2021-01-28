import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistObject } from '../../../models/artist-object';
import { SimplifiedAlbumObject } from '../../../models/simplified-album-object';
import { TrackObject } from '../../../models/track-object';


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

  favorito(value: ArtistObject | TrackObject | SimplifiedAlbumObject){
    this.favorites = [];

    let index = this.artistItems.findIndex(a => a.id == value.id);
    if(index >= 0) {
      this.artistItems.splice(index, 1);
    }
    index = this.albumsItems.findIndex(a => a.id == value.id);
    if(index >= 0){
      this.albumsItems.splice(index, 1);
    }
    index = this.tracksItems.findIndex(a => a.id == value.id);
    if(index >= 0){
      this.tracksItems.splice(index, 1);
    }

    localStorage.removeItem('Favoritos');

    this.artistItems.forEach( a => this.favorites.push(a))
    this.albumsItems.forEach( a => this.favorites.push(a))
    this.tracksItems.forEach( a => this.favorites.push(a))

    
    localStorage.setItem('Favoritos', JSON.stringify(this.favorites));
  }

  viewInfo(value: ArtistObject | TrackObject | SimplifiedAlbumObject){
    this.router.navigate(['/information/', value.id, value.type]);
  }
}
