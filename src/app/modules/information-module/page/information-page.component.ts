import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { NavComponent } from 'src/app/shared/components';
import { ArtistObject } from '../../home-module/models/artist-object';
import { SimplifiedAlbumObject } from '../../home-module/models/simplified-album-object';
import { TrackObject } from '../../home-module/models/track-object';
import { InformationDataService } from '../services/information-data.service';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit, OnDestroy {

  id: string = '';
  type: string = '';

  informationArtists: ArtistObject = {};
  informationTracks: TrackObject = {};
  informationAlbum: SimplifiedAlbumObject = {};

  favorites: any[] = [];

  subscribes: Subscription[] = [];

  @ViewChild(NavComponent) navComponent!: NavComponent;

  constructor(private infoData: InformationDataService,
              private route: ActivatedRoute,
              private alert: ToastrService,) { }

  ngOnInit(): void {
    this.initParams();
    this.getInformation();
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

  initParams(){
    this.subscribes[0] = this.route.params.subscribe(
      params => {
        this.id = params['id'],
        this.type = params['type']
      }
    )
  }

  getInformation(){
    this.subscribes[1] = this.infoData.getInformation(this.id, this.type).subscribe(
      resp => {
        if(resp){
          this.informationArtists = this.type == 'artist' ? resp : {};
          this.informationAlbum = this.type == 'album' ? resp : {};
          this.informationTracks = this.type == 'track' ? resp : {};

          this.getFavorites();
        }
      },errr => {
        this.alert.warning('Su sesion finalizo, por favor vuelva a ingresar.');
        this.navComponent.logOut()
      }
    )
  }

  getFavorites(){
    let _localStorage = JSON.parse(localStorage.getItem('Favoritos') || '[]');
    if(_localStorage == null) _localStorage = [];
    
    this.favorites = _localStorage;

    if(this.informationArtists) this.informationArtists.favorito = false;
    if(this.informationTracks) this.informationTracks.favorito = false;
    if(this.informationAlbum){
      this.informationAlbum.favorito = false;
      this.informationAlbum.tracks?.items?.forEach( (t: SimplifiedAlbumObject) => t.favorito = false)
    }

    if(this.favorites.length){
      this.favorites.forEach( fav => {
        
        if(this.informationArtists){
          if(fav.id == this.informationArtists.id){
            this.informationArtists.favorito = true;
            return
          }
        }
        
        if(this.informationAlbum){
          if(fav.id == this.informationAlbum.id){
            this.informationAlbum.favorito = true;
            return
          }

          this.informationAlbum.tracks?.items?.forEach( (t: SimplifiedAlbumObject) => {
            if(fav.id == t.id){
              t.favorito = true;
              return
            }
  
          })
        } 

        if(this.informationTracks){
          if(fav.id == this.informationTracks.id){
            this.informationTracks.favorito = true;
            return
          }
        } 
      })
    }
  }


}
