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


}
