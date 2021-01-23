import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(public http: HttpClient) { }

  getNewRelease(): Observable<any>{
    let url = 'https://api.spotify.com/v1/browse/new-releases'

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''; 

    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(url, {headers: headers});
  }

  
}

