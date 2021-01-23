import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){
    let token = localStorage.getItem('token')

    if(!token){
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
}
