import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduct?: PRODUCT[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  constructor( private productService: ProductService){
  }
  ngOnInit(): void {
    this.search();
  }
  search(){
    var filtera = new PRODUCT();
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

}
