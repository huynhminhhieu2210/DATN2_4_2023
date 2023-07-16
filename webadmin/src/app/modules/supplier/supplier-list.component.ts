import { Component, OnInit, Injector } from '@angular/core';
import { AREA } from 'src/app/core/models/AREA';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { TOP_RESULT } from 'src/app/core/models/TOP_RESULT';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { TopResultService } from 'src/app/core/services/top-result.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './supplier-list.component.html'
})
export class SupplierListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private supplierService: SupplierService,
    private topResultService: TopResultService) {
    super(injector);
  }
  listSupplier?: SUPPLIER[];
  filterInput: SUPPLIER = new SUPPLIER();
  tilte_info_delete?: string;
  id?: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
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
    this.navigatePassParam('/app/supplier-edit', { supplier: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/supplier-view', { supplier: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.supplierService.Supplier_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  search(){
    this.supplierService.Supplier_search(this.filterInput).subscribe((response: any)=>{
      this.listSupplier = response;
      this.total = this.listSupplier!.length;
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
  }
}
