import { Component, OnInit } from '@angular/core';
import { INewReleaseDto } from '../models/new-release-dto';
import { HomeDataService } from '../services/home-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newReleaseList: INewReleaseDto[] = [];

  constructor(private homeData: HomeDataService) { }

  ngOnInit(): void {
    this.getNewRelease();
  }

  getNewRelease(){
    this.homeData.getNewRelease().subscribe(
      resp => {
        if(resp){
          this.newReleaseList = resp.albums.items;
          console.log(this.newReleaseList);
        }
      }
    )
  }
}
