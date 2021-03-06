import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('token-type');

    this.router.navigate(['/']);
  }

}
