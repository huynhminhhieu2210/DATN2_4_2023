import { Component, OnInit, Injector } from '@angular/core';
import { AREA } from 'src/app/core/models/AREA';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { WAREHOUSE } from 'src/app/core/models/WAREHOUSE';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private warehouseService: WarehouseService) {
    super(injector);
  }
  listWarehouse?: WAREHOUSE[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
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
      this.reloadView();
    });
  }
  search(){
    var filtera = new WAREHOUSE();
    this.warehouseService.Warehouse_search(filtera).subscribe((response: any)=>{
      this.listWarehouse = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
