import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { NavComponent } from 'src/app/shared/components';
import { ArtistObject } from '../../../models/artist-object';
import { PagingObject } from '../../../models/paging-object';
import { PlaylistObject } from '../../../models/playlist-object';
import { PlaylistTrackObject } from '../../../models/playlist-track-object';
import { SimplifiedAlbumObject } from '../../../models/simplified-album-object';
import { TrackObject } from '../../../models/track-object';
import { HomeDataService } from '../services/home-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  loading:boolean = false;

  limiteTop = new FormControl();
  countryTop = new FormControl();

  newReleaseList: SimplifiedAlbumObject[] = [];

  topPlayList: PagingObject = {};
  items: any[] = [];

  limit: number[] = [5, 10, 20, 50];

  limitSelected: number = 50;
  countrySelected: string = '';

  p: number = 1;
  
  collection: SimplifiedAlbumObject[] = this.newReleaseList; 

  subscribes: Subscription[] = [];

  @ViewChild(NavComponent) navComponent!: NavComponent;
  
  constructor(private homeData: HomeDataService,
              private alert: ToastrService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formSubscribe();
    this.getNewRelease();
    this.getTopPlayList(50)
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

  formSubscribe(){
    this.limiteTop.setValue(50);
    this.subscribes[0] = this.limiteTop.valueChanges.subscribe(
      value => {
        this.limitSelected = value ? parseInt(value) : 10;
        this.getTopPlayList(this.limitSelected);
      }
    )
  }

  getNewRelease(){
    this.loading = true;
    this.homeData.getNewRelease().subscribe(
      resp => {
        if(resp){
          this.loading = false;
          this.newReleaseList = resp.albums.items;
        }
      },err => {
        this.errorApi();
      }
    )
  }

  getTopPlayList(limite: number){
    this.subscribes[2] = this.homeData.getPlayList(limite).subscribe(
      resp => {
        if(resp) {
          this.topPlayList = resp;
          this.items = this.topPlayList.items ? this.topPlayList.items : [];
        }
      },err => {
        this.errorApi();
      }
    )
  }

  errorApi(){
    this.loading = false;
    this.items = [];
    this.alert.warning('Su sesion finalizo, por favor vuelva a ingresar.');
    this.navComponent.logOut();
  }

  viewInfo(value: ArtistObject | TrackObject | SimplifiedAlbumObject){
    this.router.navigate(['/information/', value.id, value.type]);
  }
}
