import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit{
  constructor(private router: Router,  private jwtHelper: JwtHelperService){}
  userfullname?: string;
  email?: string;
  ngOnInit(): void {
    this.userfullname = sessionStorage.getItem('userfullname')?.toString();
    this.email = sessionStorage.getItem('email')?.toString();
  }
  isUserAuthenticated(){
    const token: string | null= sessionStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }
  logout(){
    sessionStorage.removeItem("jwt");
    this.router.navigate(["/account/login"]);
  }
}
