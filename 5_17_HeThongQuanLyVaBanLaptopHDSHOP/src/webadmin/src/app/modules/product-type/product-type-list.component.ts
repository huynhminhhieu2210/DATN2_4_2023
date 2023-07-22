import { Component, Injector, OnInit } from '@angular/core';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
import { TOP_RESULT } from 'src/app/core/models/TOP_RESULT';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { TopResultService } from 'src/app/core/services/top-result.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './product-type-list.component.html'
})
export class ProductTypeListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private productTypeService: ProductTypeService,
    private topResultService: TopResultService) {
    super(injector);
  }
  listProductType?: PRODUCT_TYPE[];
  tilte_info_delete?: string;
  id?: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  filterInput: PRODUCT_TYPE  = new PRODUCT_TYPE();
  total?: number;
  ngOnInit(): void {
    this.filterInput!.top = 5;
    this.loadTopResult();
    this.search();
  }
  loadTopResult(){
    var filtertr = new TOP_RESULT();
    this.topResultService.Top_result_search(filtertr).subscribe((response: any)=>{
      this.tableSizes = response;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(): void {
    this.tableSize = this.filterInput.top!;
    this.page = 1;
  }
  onEdit(item: any){
    this.navigatePassParam('/app/product-type-edit', { producttype: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/product-type-view', { producttype: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.productTypeService.Product_Type_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  search(){
    this.productTypeService.Product_Type_search(this.filterInput).subscribe((response: any)=>{
      this.listProductType = response;
      this.total = this.listProductType!.length;
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
  }
}
