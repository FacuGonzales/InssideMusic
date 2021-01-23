import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs' 
import { ILoginDto } from '../models/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(public http: HttpClient) { }

  login(userLogin: ILoginDto): Observable<any> {
    const url = 'https://accounts.spotify.com/api/token'

    const body = new HttpParams()
      .set('grant_type', userLogin.grant_type ? userLogin.grant_type : '')
      .set('client_id', userLogin.client_id ? userLogin.client_id : '')
      .set('client_secret', userLogin.client_secret ? userLogin.client_secret : '');

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  
    return this.http.post(url, body.toString(), {headers: headers});
  }
}
