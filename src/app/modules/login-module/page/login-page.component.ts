import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ILoginDto } from '../models/login-dto';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  
  loginForm: FormGroup = new FormGroup({});

  userLogin: ILoginDto = {};
  
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

  login(){
    this.userLogin.grant_type = 'client_credentials';
    this.userLogin.client_id = (this.loginForm.get('userName')?.value && this.loginForm.get('userName')?.value == 'test') ? '23b9d5b2231c402893c3eadfd0e59d0e' : this.loginForm.get('userName')?.value;
    this.userLogin.client_secret = (this.loginForm.get('password')?.value && this.loginForm.get('password')?.value == '1234') ? '5a867cfcf25d4a53b77ccab27d5d0b1b' : this.loginForm.get('password')?.value;

    this.subscribes.push(this.loginData.login(this.userLogin).subscribe(
      resp => {
        if(resp){
          console.log(resp)
        }else{
          console.log(resp)
        }
      },err => console.log(err)
    ))

  }

}
