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
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/app/dashboard"]);
        }, (err: any) => {
          this.invalidLogin = true;
        })
  }
}
