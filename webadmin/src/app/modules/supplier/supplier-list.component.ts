import { Component, OnInit, Injector } from '@angular/core';
import { AREA } from 'src/app/core/models/AREA';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './supplier-list.component.html'
})
export class SupplierListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private supplierService: SupplierService) {
    super(injector);
  }
  listSupplier?: SUPPLIER[];
  filterInput: SUPPLIER = new SUPPLIER();
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
  }
  onEdit(item: any){
    this.navigatePassParam('/app/supplier-edit', { supplier: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/supplier-view', { supplier: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.supplierService.Supplier_delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    this.supplierService.Supplier_search(this.filterInput).subscribe((response: any)=>{
      this.listSupplier = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
