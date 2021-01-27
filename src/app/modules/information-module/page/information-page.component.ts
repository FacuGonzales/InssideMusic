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

}
