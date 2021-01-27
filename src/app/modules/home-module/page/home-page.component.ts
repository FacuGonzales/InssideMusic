import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { NavComponent } from 'src/app/shared/components';
import { PlaylistObject } from '../models/playlist-object';
import { PlaylistTrackObject } from '../models/playlist-track-object';
import { SimplifiedAlbumObject } from '../models/simplified-album-object';
import { TrackObject } from '../models/track-object';
import { HomeDataService } from '../services/home-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  limiteTop = new FormControl();
  countryTop = new FormControl();

  newReleaseList: SimplifiedAlbumObject[] = [];

  topPlayList: any;
  items: any[] = [];

  limit: number[] = [5, 10, 20, 50];
  country: string[] = ['United Estate', 'United Kingdom', 'Andorra', 'Argentina', 'Austria', 'Australia',
                       'Belgium', 'Bulgaria', 'Bolivia', 'Brazil', 'Canada', 'Switzerland', 'Chile', 'Colombia',
                       'Costa Rica', 'Cyprus', 'Czech Republic', 'Germany', 'Denmark', 'Dominican Republic',
                       'Ecuador', 'Estonia', 'Spain', 'Finland', 'France', 'Greece', 'Guatemala', 'Hon Kong',
                       'Honduras', 'Hungary', 'Indonesia', 'Ireland', 'Israel', 'India', 'Iceland', 'Italy',
                       'Japan', 'Lithuania', 'Luxemburgo', 'Latvia', 'Mexico', 'Malaysia', 'Nicaragua', 'Netherland',
                       'Norway', 'New Zeland', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Paraguay',
                       'Romania', 'Russian Federation', 'Sweden', 'Singapore', 'Slovakia', 'El Salvador', 'Thailand',
                       'Turkey', 'Taiwan', 'Ukraine', 'Uruguay', 'Viet Name', 'South Africa'];

  limitSelected: number = 50;
  countrySelected: string = '';

  subscribes: Subscription[] = [];

  @ViewChild(NavComponent) navComponent!: NavComponent;
  
  constructor(private homeData: HomeDataService,
              private alert: ToastrService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formSubscribe();
    this.getNewRelease();
    this.getTopPlayList(50, '')
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

  formSubscribe(){
    this.limiteTop.setValue(50);
    this.subscribes[0] = this.limiteTop.valueChanges.subscribe(
      value => {
        this.limitSelected = value ? parseInt(value) : 10;
        this.setFilters(this.limitSelected, this.countrySelected);
      }
    )

    this.subscribes[1] = this.countryTop.valueChanges.subscribe(
      value => {
        this.countrySelected = value
        this.setFilters(this.limitSelected, this.countrySelected);
      }
    );

   
  }

  getNewRelease(){
    this.homeData.getNewRelease().subscribe(
      resp => {
        if(resp){
          this.newReleaseList = resp.albums.items;
        }
      },err => {
        this.alert.warning('Su sesion finalizo, por favor vuelva a ingresar.');
        this.navComponent.logOut();
      }
    )
  }

  getTopPlayList(limite: number, country: string,){
    this.subscribes[2] = this.homeData.getPlayList(limite, country).subscribe(
      resp => {
        if(resp) {
          this.topPlayList = resp;
          this.items = this.topPlayList.items;
        }
      },err => {
        this.items = [];
      }
    )
  }

  setFilters(limite:number, country:string){
    let limit = limite ? limite : 50;

    let pais: string = '';
    switch(country){
      case 'United Estate' : 
        pais = 'US'
        break;
    
      case 'United Kingdom' : 
        pais = 'GB'
        break;
        
      case 'Andorra' : 
        pais = 'AD'
        break;

      case 'Argentina' : 
        pais = 'AR'
        break;

      case 'Austria' : 
        pais = 'AT'
        break;

      case 'Australia' : 
        pais = 'AU'
        break;

      case 'Belgium' : 
        pais = 'BE'
        break;

      case 'Bulgaria' : 
        pais = 'BG'
        break;

      case 'Bolivia' : 
        pais = 'BO'
        break;

      case 'Brazil' : 
        pais = 'BR'
        break;

      case 'Canada' : 
        pais = 'CA'
        break;

      case 'Switzerland' : 
        pais = 'CH'
        break;

      case 'Chile': 
        pais = 'CL'
        break;

      case 'Colombia': 
        pais = 'CO'
        break;

      case 'Costa Rica': 
        pais = 'CR'
        break;

      case 'Cyprus': 
        pais = 'CY'
        break;

      case 'Czech Republic': 
        pais = 'CZ'
        break;

      case 'Germany': 
        pais = 'DE'
        break;

      case 'Denmark': 
        pais = 'DK'
        break;

      case 'Dominican Republic': 
        pais = 'DO'
        break;

      case 'Ecuador': 
        pais = 'EC'
        break;

      case 'Estonia': 
        pais = 'EE'
        break;

      case 'Spain': 
        pais = 'ES'
        break;

      case 'Finland': 
        pais = 'FI'
        break;

      case 'France': 
        pais = 'FR'
        break;

      case 'Greece': 
        pais = 'GR'
        break;

      case 'Guatemala': 
        pais = 'GT'
        break;

      case 'Hon Kong': 
        pais = 'HK'
        break;

      case 'Honduras': 
        pais = 'HN'
        break;

      case 'Hungary': 
        pais = 'HU'
        break;

      case 'Indonesia': 
        pais = 'ID'
        break;

      case 'Ireland': 
        pais = 'IE'
        break;

      case 'Israel': 
        pais = 'IL'
        break;

      case 'India': 
        pais = 'IN'
        break;

      case 'Iceland': 
        pais = 'IS'
        break;

      case 'Italy': 
        pais = 'IT'
        break;

      case 'Japan': 
        pais = 'JP'
        break;

      case 'Lithuania': 
        pais = 'LT'
        break;

      case 'Luxemburgo': 
        pais = 'LU'
        break;

      case 'Latvia': 
        pais = 'LV'
        break;

      case 'Mexico': 
        pais = 'MX'
        break;

      case 'Malaysia': 
        pais = 'MY'
        break;

      case 'Nicaragua': 
        pais = 'NI'
        break;

      case 'Netherland': 
        pais = 'NL'
        break;

      case 'Norway': 
        pais = 'NO'
        break;

      case 'New Zeland': 
        pais = 'NZ'
        break;

      case 'Panama': 
        pais = 'PA'
        break;

      case 'Peru': 
        pais = 'PE'
        break;

      case 'Philippines': 
        pais = 'PH'
        break;

      case 'Poland': 
        pais = 'PL'
        break;

      case 'Portugal': 
        pais = 'PT'
        break;

      case 'Paraguay': 
        pais = 'PY'
        break;

      case 'Romania': 
        pais = 'RO'
        break;

      case 'Russian Federation': 
        pais = 'RU'
        break;

      case 'Sweden': 
        pais = 'SE'
        break;

      case 'Singapore': 
        pais = 'SG'
        break;

      case 'Slovakia': 
        pais = 'SK'
        break;

      case 'El Salvador': 
        pais = 'SV'
        break;

      case 'Thailand': 
        pais = 'TH'
        break;

      case 'Turkey': 
        pais = 'TR'
        break;

      case 'Taiwan': 
        pais = 'TW'
        break;

      case 'Ukraine': 
        pais = 'UA'
        break;

      case 'Uruguay': 
        pais = 'UY'
        break;
        
      case 'Viet Name': 
        pais = 'VN'
        break;

      case 'South Africa': 
        pais = 'ZA'
        break;

      default: pais = '';
  
      break;
    }
   
    this.getTopPlayList(limit, pais);
  }

}
