import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ILoginDto } from '../models/login-dto';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loading: boolean = false;
  
  loginForm: FormGroup = new FormGroup({});


  subscribes: Subscription[] = [];

  constructor(private loginData: LoginDataService, 
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

  formInit(){
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

}
