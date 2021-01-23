import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loading: boolean = false;
  
  loginForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  formInit(){
    this.loginForm = this.fb.group({
      userName: '',
      password: ''
    })
  }

}
