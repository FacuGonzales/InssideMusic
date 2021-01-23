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

    const grant_type = 'client_credentials';
    const client_id = (userLogin.client_id &&  userLogin.client_id == 'test') ? '23b9d5b2231c402893c3eadfd0e59d0e' : '';
    const client_secret = (userLogin.client_secret && userLogin.client_secret == '1234') ? '5a867cfcf25d4a53b77ccab27d5d0b1b' : '';
    
    const body = new HttpParams()
      .set('grant_type', grant_type)
      .set('client_id', client_id)
      .set('client_secret', client_secret);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  
    return this.http.post(url, body.toString(), {headers: headers});
  }
}
