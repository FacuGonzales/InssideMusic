import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { INewReleaseDto } from '../models/new-release-dto';
import { HomeDataService } from '../services/home-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newReleaseList: INewReleaseDto[] = [];

  constructor(private homeData: HomeDataService,
              private alert: ToastrService) { }

  ngOnInit(): void {
    this.getNewRelease();
  }

  getNewRelease(){
    this.homeData.getNewRelease().subscribe(
      resp => {
        if(resp){
          this.newReleaseList = resp.albums.items;
        }
      },err => this.alert.error(err)
    )
  }
}
