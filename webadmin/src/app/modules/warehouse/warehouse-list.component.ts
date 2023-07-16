import { Component, OnInit, Injector } from '@angular/core';
import { AREA } from 'src/app/core/models/AREA';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { TOP_RESULT } from 'src/app/core/models/TOP_RESULT';
import { WAREHOUSE } from 'src/app/core/models/WAREHOUSE';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { TopResultService } from 'src/app/core/services/top-result.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private warehouseService: WarehouseService,
    private topResultService: TopResultService) {
    super(injector);
  }
  listWarehouse?: WAREHOUSE[];
  tilte_info_delete?: string;
  total?: number;
  id?: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  filterInput: WAREHOUSE  = new WAREHOUSE();
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
    this.navigatePassParam('/app/warehouse-edit', { warehouse: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/warehouse-view', { warehouse: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.warehouseService.Warehouse_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  search(){
    this.warehouseService.Warehouse_search(this.filterInput).subscribe((response: any)=>{
      this.listWarehouse = response;
      this.total = this.listWarehouse!.length;
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
  }
}
