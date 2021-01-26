import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(public http: HttpClient) { }

  searchAnItem(item: string, type: string): Observable<any>{

    let filterItem = `?q=${item}`
    let filterType = `&type=${type}`

    let url = `https://api.spotify.com/v1/search${filterItem}${filterType}`

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''; 

    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(url, {headers: headers});
  }

}
