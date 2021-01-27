
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationDataService {

  constructor(public http: HttpClient) { }

  getInformation(id:string, type:string): Observable<any>{
    let typeSearch = (type && type == 'artist') ? 'artists' : 
                     (type && type == 'album') ? 'albums' : 
                     (type && type == 'track') ? 'tracks' : '';

    let url = `https://api.spotify.com/v1/${typeSearch}/${id}`

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''; 

    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(url, {headers: headers});
  }

}
