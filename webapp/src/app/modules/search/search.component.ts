import { Component, Injector, OnInit } from '@angular/core';
import { contains } from 'jquery';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { ProductService } from 'src/app/core/services/product.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends ComponentBase implements OnInit {
  listProduct?: PRODUCT[];
  listProductAll?: PRODUCT[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  sortProduct: string ='TC';
  title: string;
  total: number;
  constructor(
    injector: Injector,
    private productService: ProductService
    ) {
    super(injector);
  }
  ngOnInit(): void {
    this.search();
    this.title = this.getRouteParam('filter') == undefined || this.getRouteParam('filter') == '' || this.getRouteParam('filter') == null ? '' : this.getRouteParam('filter');
  }
  search(){
    var filtera = new PRODUCT();
    filtera.producT_NAME = this.getRouteParam('filter');
    filtera.iS_ACTIVE = '1';
    this.productService.Product_customer_search(filtera).subscribe((response: any)=>{
      this.listProduct = response;
      this.listProductAll = response;
      this.total = this.listProduct!.length;
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
  changePrice1(){
    this.listProduct = this.listProductAll.filter(x => x.price <= 10000000);
  }
  changePrice2(){
    this.listProduct = this.listProductAll.filter(x => x.price > 10000000 && x.price <= 15000000);
  }
  changePrice3(){
    this.listProduct = this.listProductAll.filter(x => x.price > 15000000 && x.price <= 20000000);
  }
  changePrice4(){
    this.listProduct = this.listProductAll.filter(x => x.price > 20000000 && x.price <= 25000000);
  }
  changePrice5(){
    this.listProduct = this.listProductAll.filter(x => x.price > 25000000 && x.price <= 30000000);
  }
  changePrice6(){
    this.listProduct = this.listProductAll;
  }
  
  onSortProduct(){
    this.listProduct = this.listProductAll;
    if(this.sortProduct == 'TC'){
      this.listProduct.sort((a, b) => a.price - b.price);
    }else if(this.sortProduct == 'CT'){
     this.listProduct.sort((a, b) => b.price - a.price);
    }else if(this.sortProduct == 'MN'){
      this.listProduct.sort((a, b) => b.creatE_DATE_DECIMAL - a.creatE_DATE_DECIMAL);
    }else if(this.sortProduct == 'PB'){
      this.listProduct.sort((a, b) => b.quantitY_SELL - a.quantitY_SELL);
    }
  }

}