import { Component, Injector, OnInit } from '@angular/core';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { INVOICE_DT } from 'src/app/core/models/INVOICE_DT';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends ComponentBase implements OnInit {
  listProduct?: PRODUCT[];
  listCart?: INVOICE_DT[];
  total: number = 0;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(
    injector: Injector,
    private cartService: CartService
    ) {
    super(injector);
  }
  ngOnInit(): void {
    this.loadCart();
  }
  removeCart(id: string){
    var userlogin = localStorage.getItem("username");
    this.cartService.Cart_delete(userlogin,id).subscribe((response: any)=>{
      this.loadCart();
    });
  }
  loadCart(){
    this.total = 0;
    var userlogin = localStorage.getItem("username");
    this.cartService.Cart_load(userlogin).subscribe((response: any)=>{
      this.listCart = response;
      if(this.listCart != undefined && this.listCart != null){
        this.listCart.forEach(element => {
          this.total += element.quantity * element.price;
        });
      }
    });

  }
  updateCart(){
    var userlogin = localStorage.getItem("username");
    var input = new INVOICE();
    input.creatE_ID = localStorage.getItem("username");
    input.LST_INVOICE_DT = this.listCart;
    this.cartService.Cart_update(input).subscribe((response: any)=>{
      this.loadCart();
    });

  }
  formatCurrency(num)
  {
    let sign: any;
    let cents: any;
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
    {
        num = "0";
    }

    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
    {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + num + 'đ');
}
onview(item: any){
  this.navigatePassParam('/product-detail', { productid: item }, { filterInput: JSON.stringify(undefined) });
}
}