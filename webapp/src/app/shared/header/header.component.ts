import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,private jwtHelper: JwtHelperService,){}
  ngOnInit(): void {
  }
  loginOrProfile(){
    const token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      this.router.navigate(["/profile"]);
    }else{
      this.router.navigate(["/login"]);
    }
  }
}
