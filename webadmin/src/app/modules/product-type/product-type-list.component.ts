import { Component, Injector, OnInit } from '@angular/core';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './product-type-list.component.html'
})
export class ProductTypeListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private productTypeService: ProductTypeService) {
    super(injector);
  }
  listProductType?: PRODUCT_TYPE[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
  }
  onEdit(item: any){
    this.navigatePassParam('/product-type-edit', { producttype: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/product-type-view', { producttype: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.productTypeService.Product_Type_delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    var filtera = new PRODUCT_TYPE();
    this.productTypeService.Product_Type_search(filtera).subscribe((response: any)=>{
      this.listProductType = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
