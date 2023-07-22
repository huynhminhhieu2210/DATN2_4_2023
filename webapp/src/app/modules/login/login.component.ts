import { UserService } from './../../core/services/user.service';

import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { REGISTER } from 'src/app/core/models/REGISTER';
import { USER } from 'src/app/core/models/USER';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean | undefined;
  loginFaild: boolean = false;

  constructor(private router: Router, private http: HttpClient,    
    private formBuilder: FormBuilder, private socialAuthService: SocialAuthService,
    private userService: UserService) {  console.log(this.isLoggedin); }
  login(form: NgForm){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    const credentials = {
      'useR_NAME' : form.value.username,
      'password' : form.value.password,
      'type': 'customer'
    }
     this.http.post("https://localhost:5001/api/auth/login", credentials)
        .subscribe((response: any) => {
          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;

          this.http.post("https://localhost:5001/api/Users/USER_GET_INFO_LOGIN", credentials)
          .subscribe((response: any) => {
            localStorage.setItem('userid',response[0].useR_ID)
            localStorage.setItem('roleuserid',response[0].rolE_USER)
            localStorage.setItem('roleusername',response[0].rolE_USER_NAME)
            localStorage.setItem('usercode',response[0].useR_CODE)
            localStorage.setItem('username',response[0].useR_NAME)
            localStorage.setItem('userfullname',response[0].useR_FULLNAME)
            localStorage.setItem('email',response[0].useR_EMAIL)
            localStorage.setItem('phone',response[0].useR_PHONE)
            localStorage.setItem('address',response[0].useR_ADDRESS)
            localStorage.setItem('methodLogin',response[0].methoD_LOGIN)
          })
          this.router.navigate(["/home"]);
        }, (err: any) => {
          this.invalidLogin = true;
          this.loginFaild = true;
        })
  }
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  @ViewChild('registerForm') registerForm?: ElementRef;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      if(user != null && user != undefined){
        localStorage.setItem("jwt", user.authToken);
        var input = new USER();
        input.useR_NAME = this.socialUser.firstName.toLowerCase() + this.socialUser.lastName.toLowerCase() +this.socialUser.id;
        input.useR_CODE = this.socialUser.id;
        input.useR_EMAIL = this.socialUser.email;
        input.useR_FULLNAME = this.socialUser.name;
        input.useR_PASSWORD = this.socialUser.id;
        input.creatE_ID = 'admin';
        input.useR_STATUS = '1';
        input.rolE_USER = 'CUSTOMER';
        input.methoD_LOGIN = 'FACEBOOK';
        this.userService.User_insert(input).subscribe((response: any)=>{
          this.loginUser(input.useR_NAME,input.useR_PASSWORD);
        });
        this.invalidLogin = false;
      }
      else{
        this.invalidLogin = true;
      }
      console.log(this.socialUser);
    });
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  loginWithGoogle(): void {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
  loginUser(username: string, pass: string){
    const credentials = {
      'useR_NAME' : username,
      'password' : pass,
      'type': 'customer'
    }
     this.http.post("https://localhost:5001/api/auth/login", credentials)
        .subscribe((response: any) => {
          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;

          this.http.post("https://localhost:5001/api/Users/USER_GET_INFO_LOGIN", credentials)
          .subscribe((response: any) => {
            localStorage.setItem('userid',response[0].useR_ID)
            localStorage.setItem('roleuserid',response[0].rolE_USER)
            localStorage.setItem('roleusername',response[0].rolE_USER_NAME)
            localStorage.setItem('usercode',response[0].useR_CODE)
            localStorage.setItem('username',response[0].useR_NAME)
            localStorage.setItem('userfullname',response[0].useR_FULLNAME)
            localStorage.setItem('email',response[0].useR_EMAIL)
            localStorage.setItem('phone',response[0].useR_PHONE)
            localStorage.setItem('address',response[0].useR_ADDRESS)
            localStorage.setItem('methodLogin',response[0].methoD_LOGIN)
          })
          this.router.navigate(["/home"]);
        }, (err: any) => {
          this.invalidLogin = true;
        })
  }
  titleerorr: string;
  titleinfo: string;
  isShowError = false;
  register(form: NgForm){
    this.titleerorr = '';
    this.titleinfo = '';
    if ((this.registerForm as any).form.invalid) {
      this.isShowError = true;
      this.titleerorr = 'Vui lòng nhập đầy đủ thông tin.'
      return;
    }
    var input = new REGISTER();
    input.email = form.value.emailr;
    input.password = form.value.passwordr;
    input.useR_NAME = form.value.usernamer;

    this.userService.User_register(input).subscribe((response: any)=>{
      if(response[0].result != '0'){
        this.titleerorr = response[0].errorDesc;
      }
      else{
        this.titleinfo = response[0].errorDesc;
      }
    });
  }
}
