import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ArtistObject } from '../../home-module/models/artist-object';
import { PagingObject } from '../../home-module/models/paging-object';
import { SimplifiedAlbumObject } from '../../home-module/models/simplified-album-object';
import { TrackObject } from '../../home-module/models/track-object';
import { SearchDataService } from '../services/search-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  searchForm = new FormControl();
  typeForm= new FormControl();

  // Contiene el resultado de la Busqueda, un objeto de tipo PagingObject que envuelve
  // ArtistObject/TrackObject/SimplifiedAlbumObject
  searchResult: PagingObject = {};

  // Si la busqueda es de tipo Artist -> recibe un objeto de tipo ArtistObject
  itemsArtists: ArtistObject[] = [];

  // Si la busqueda es de tipo Track -> recibe un objeto de tipo TrackObject
  itemsTracks: TrackObject[] = [];

  // Si la busqueda es de tipo Album -> recibe un objeto de tipo SimplifiedAlbumObject
  itemsAlbum: SimplifiedAlbumObject[] = [];

  type: string[] = ['artist', 'album', 'track'];
  
  itemSelected: string = '';
  typeSelected: string = 'artist';

  favorites: any[]= [];
  
  subscribes: Subscription[] = [];
  constructor(private searchData: SearchDataService,
              private alert: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.typeForm.setValue('artist');
    this.formSubscribe()
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

  formSubscribe(){
    this.searchForm.valueChanges.subscribe( value => {
      this.itemSelected = value 

      if(this.itemSelected.length > 3){
        this.getItem(this.itemSelected, this.typeSelected)
      }
    });

    this.typeForm.valueChanges.subscribe(_type => {
      this.typeSelected = _type;

      if(this.itemSelected.length > 3){
        this.getItem(this.itemSelected, this.typeSelected)
      }
    });        
  }

  getItem(item: string, types:string){
    let type = (this.typeSelected && this.typeSelected == 'artist') ? 'artists' : 
               (this.typeSelected && this.typeSelected == 'album') ? 'albums' :
               (this.typeSelected && this.typeSelected == 'track') ? 'tracks' : '';
               
    this.subscribes.push(this.searchData.searchAnItem(item, types).subscribe(
      resp => {
        if(resp){
          this.searchResult = resp;

          switch(type){
            case 'artists':
              this.itemsArtists = resp[type].items;
              this.itemsAlbum = [];
              this.itemsTracks = [];
              break;

            case 'albums':
              this.itemsAlbum = resp[type].items;
              this.itemsArtists = [];
              this.itemsTracks = [];
              break;

            case 'tracks':
              this.itemsTracks = resp[type].items;
              this.itemsArtists = [];
              this.itemsAlbum = [];
              break;

            break;
          }

          this.getFavorites();
          
        }
       
      },err => {
        this.logOut();
      }
    ))
  }

  getFavorites(){
    let _localStorage = JSON.parse(localStorage.getItem('Favoritos') || '[]');
    if(_localStorage == null) _localStorage = [];
    
    this.favorites = _localStorage;

    // Recorro cada array de items (Artistas, Albums y Tracks) y seteo 'Favorito' en falso
    this.itemsArtists.forEach(r => r.favorito = false)
    this.itemsTracks.forEach(r => r.favorito = false)
    this.itemsAlbum.forEach(r => r.favorito = false)

    // Recorro todos mis favoritos
    if(this.favorites.length){
      this.favorites.forEach( f => {
        
        // Reviso si existen resultados dentro de Artistas
        if(this.itemsArtists.length){
          // Recorro los items de artistas obtenidos
          this.itemsArtists.forEach( a => {
            // compruebo si existe alguno igual dentro de mis favoritos
            if(f.id == a.id){
              // seteo su propiedad 'favorito' en true
              a.favorito = true;
              return
            }
          })

          return
        }
        
        // Reviso si existen resultados dentro de Album
        if(this.itemsAlbum.length){
          // Recorro los items de albums obtenidos
          this.itemsAlbum.forEach( a => {
            // compruebo si existe alguno igual dentro de mis favoritos
            if(f.id == a.id){
              // seteo su propiedad 'favorito' en true
              a.favorito = true;
              return
            }
          })

          return
        } 

        // Reviso si existen resultados dentro de Tracks
        if(this.itemsTracks.length){
          // Recorro los items de Tracks obtenidos
          this.itemsTracks.forEach( t => {
            // compruebo si existe alguno igual dentro de mis favoritos
            if(f.id == t.id){
              // seteo su propiedad 'favorito' en true
              t.favorito = true;
              return
            }
          })

          return
        } 
      })
    }
  }

  favorito(value: ArtistObject | TrackObject | SimplifiedAlbumObject){
    let index = this.favorites.findIndex(e => e.id == value.id);

    if(index >= 0){ 
      this.favorites.splice(index, 1);
    }else{
      this.favorites.push(value);
    }

    localStorage.setItem('Favoritos', JSON.stringify(this.favorites));
    this.getFavorites();
  }

  viewInfo(value: ArtistObject | TrackObject | SimplifiedAlbumObject){
    this.router.navigate(['/info/', value.id, value.type]);
  }

  logOut(){
    this.alert.warning('Su sesion finalizo, por favor vuelva a ingresar.')
    localStorage.removeItem('token');
    localStorage.removeItem('token-type');

    this.router.navigate(['/']);
  }
}
