import { Component, Injector, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { USER } from 'src/app/core/models/USER';
import { ProductService } from 'src/app/core/services/product.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private productService: ProductService) {
    super(injector);
  }
  listProduct?: PRODUCT[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
  }
  onEdit(item: any){
    this.navigatePassParam('/app/products-edit', { product: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/products-view', { product: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.productService.Product__delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    var filtera = new PRODUCT();
    this.productService.Product__search(filtera).subscribe((response: any)=>{
      this.listProduct = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string, id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
