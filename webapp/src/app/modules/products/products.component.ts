import { Component, Injector, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { ProductService } from 'src/app/core/services/product.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends ComponentBase implements OnInit {
  listProduct?: PRODUCT[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  producT_TYPE_ID: string ='TC';
  title: string;
  constructor(
    injector: Injector,
    private productService: ProductService
    ) {
    super(injector);
  }
  ngOnInit(): void {
    this.search();
    this.title = this.getRouteParam('type') == undefined || this.getRouteParam('type') == '' || this.getRouteParam('type') == null ? '' : ' >> '+ this.getRouteParam('type');
  }
  search(){
    var filtera = new PRODUCT();
    filtera.producT_TYPE_ID = this.getRouteParam('type');
    this.productService.Product__search(filtera).subscribe((response: any)=>{
      this.listProduct = response;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.search();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.search();
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