import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit{
  constructor(private router: Router,  private jwtHelper: JwtHelperService){}
  userfullname?: string;
  email?: string;
  ngOnInit(): void {
    this.userfullname = localStorage.getItem('userfullname')?.toString();
    this.email = localStorage.getItem('email')?.toString();
  }
  isUserAuthenticated(){
    const token: string | null= localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(["/account/login"]);
  }
}
