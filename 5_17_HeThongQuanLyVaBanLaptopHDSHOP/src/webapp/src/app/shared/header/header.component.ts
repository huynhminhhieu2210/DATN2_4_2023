import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
import { ProductTypeService } from 'src/app/core/services/product-type.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,private jwtHelper: JwtHelperService,private productTypeService: ProductTypeService,){}
  listProductType: PRODUCT_TYPE[] = [];
  ngOnInit(): void {
    var filterb = new PRODUCT_TYPE();
    this.productTypeService.Product_Type_search(filterb).subscribe((response: any)=>{
      this.listProductType = response;
    });
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
