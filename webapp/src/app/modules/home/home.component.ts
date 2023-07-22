import { Component, Injector, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { ProductService } from 'src/app/core/services/product.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends ComponentBase implements OnInit {
  listProduct?: PRODUCT[];
  listProductSell?: PRODUCT[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  pageSell: number = 1;
  countSell: number = 0;
  tableSizeSell: number = 4;
  constructor(
    injector: Injector,
    private productService: ProductService
    ) {
    super(injector);
  }
  ngOnInit(): void {
    var filtera = new PRODUCT();
    filtera.iS_ACTIVE = '1';
    this.productService.Product_customer_search(filtera).subscribe((response: any)=>{
      this.listProduct = response;
    });
    var filterb = new PRODUCT();
    filterb.iS_ACTIVE = '1';
    this.productService.Product_sell_search(filterb).subscribe((response: any)=>{
      this.listProductSell = response;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    var filtera = new PRODUCT();
    filtera.iS_ACTIVE = '1';
    this.productService.Product_customer_search(filtera).subscribe((response: any)=>{
      this.listProduct = response;
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
