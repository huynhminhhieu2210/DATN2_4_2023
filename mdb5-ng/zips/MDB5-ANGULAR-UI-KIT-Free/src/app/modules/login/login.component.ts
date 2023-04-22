import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidLogin: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }
  login(form: NgForm){
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
            localStorage.setItem('branchid',response[0].brancH_ID)
            localStorage.setItem('roleuserid',response[0].rolE_USER_ID)
            localStorage.setItem('roleusername',response[0].rolE_USER_NAME)
            localStorage.setItem('usercode',response[0].useR_CODE)
            localStorage.setItem('username',response[0].useR_NAME)
            localStorage.setItem('userfullname',response[0].useR_FULLNAME)
            localStorage.setItem('email',response[0].email)
            localStorage.setItem('phone',response[0].phone)
            localStorage.setItem('address',response[0].address)
          })
          this.router.navigate(["/app/dashboard"]);
        }, (err: any) => {
          this.invalidLogin = true;
        })
  }
}
