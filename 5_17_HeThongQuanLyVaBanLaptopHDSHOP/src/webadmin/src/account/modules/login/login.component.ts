import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  invalidLogin: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }
  login(form: NgForm){
    const credentials = {
      'useR_NAME' : form.value.username,
      'password' : form.value.password
    }
     this.http.post("https://localhost:5001/api/auth/login", credentials)
        .subscribe((response: any) => {
          const token = (<any>response).token;
          sessionStorage.setItem("jwt", token);
          this.invalidLogin = false;

          this.http.post("https://localhost:5001/api/Users/USER_GET_INFO_LOGIN", credentials)
          .subscribe((response: any) => {
            sessionStorage.setItem('userid',response[0].useR_ID)
            sessionStorage.setItem('branchid',response[0].brancH_ID)
            sessionStorage.setItem('roleuserid',response[0].rolE_USER_ID)
            sessionStorage.setItem('roleusername',response[0].rolE_USER_NAME)
            sessionStorage.setItem('usercode',response[0].useR_CODE)
            sessionStorage.setItem('username',response[0].useR_NAME)
            sessionStorage.setItem('userfullname',response[0].useR_FULLNAME)
            sessionStorage.setItem('email',response[0].useR_EMAIL)
            sessionStorage.setItem('phone',response[0].useR_PHONE)
            sessionStorage.setItem('address',response[0].useR_ADDRESS)
            sessionStorage.setItem('branchname',response[0].brancH_NAME)
          })
          this.router.navigate(["/app/dashboard"]);
        }, (err: any) => {
          this.invalidLogin = true;
        })
  }
}
