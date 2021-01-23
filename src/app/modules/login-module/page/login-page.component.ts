import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
              private fb: FormBuilder,
              private router: Router,
              private alert: ToastrService) { }

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
    this.loading = true;

    this.userLogin.grant_type = '';
    this.userLogin.client_id = this.loginForm.get('userName')?.value
    this.userLogin.client_secret = this.loginForm.get('password')?.value

    this.subscribes.push(this.loginData.login(this.userLogin).subscribe(
      resp => {

        if(!resp) {
          this.loading = false;
          this.alert.error(resp.message);
          return
        }

        this.loading = false;
        this.alert.success('Bienvenido de nuevo!');

        localStorage.setItem('token', resp.access_token);
        localStorage.setItem('token-type', resp.token_type);

        this.router.navigate(['/home']);

      },error => {
        this.loading = false;
        this.alert.error(error.error.error_description);
      }
    ))

  }

}
