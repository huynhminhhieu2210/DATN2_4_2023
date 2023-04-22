import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
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
  ngOnInit(): void {
    this.byid();
  }
  constructor(
    injector: Injector,
    private productService: ProductService
    ) {
    super(injector);
  }
  byid(){
    let id: string = this.getRouteParam('productid');
    this.productService.Product__byid(id).subscribe((response: any)=>{
      this.productInfo = response[0];
      this.reloadView();
    });
  }

}
