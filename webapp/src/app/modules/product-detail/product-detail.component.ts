import { Component, ElementRef, Injectable, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ProductDetailComponent extends ComponentBase implements OnInit {
  productInfo?: PRODUCT;
  ref: ElementRef;
  ngOnInit(): void {
    this.byid();
    $("body, html").animate({scrollTop:0},0);
  }
  constructor(
    injector: Injector,
    private productService: ProductService,
    private cartService: CartService
    ) {
    super(injector);
  }
  byid(){
    let id: string = this.getRouteParam('productid');
    this.productService.Product_byid(id).subscribe((response: any)=>{
      this.productInfo = response[0];
      //document.getElementById("descriptionContent").innerHTML = 'this.productInfo.description';
    });
  }
  addCart(){
    let id: string = this.getRouteParam('productid');
    this.cartService.Cart_add_product(localStorage.getItem("username"),id).subscribe((response: any)=>{
      this.navigatePassParam('/cart', {  }, { filterInput: JSON.stringify(undefined) });
    });
  }

}
