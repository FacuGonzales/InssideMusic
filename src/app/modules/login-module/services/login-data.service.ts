import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs' 
import { ILoginDto } from '../models/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(public http: HttpClient) { }

  login(userLogin: ILoginDto): Observable<any>{
    let url = 'https://accounts.spotify.com/api/token'

    let params = JSON.stringify(userLogin);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, params, {headers: headers});
  } 
}
