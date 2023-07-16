import { Component, Injector, OnInit } from '@angular/core';
import { TOP_RESULT } from 'src/app/core/models/TOP_RESULT';
import { USER } from 'src/app/core/models/USER';
import { CustomerService } from 'src/app/core/services/customer.service';
import { TopResultService } from 'src/app/core/services/top-result.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private customerService: CustomerService,
    private topResultService: TopResultService) {
    super(injector);
  }
  filterInput: USER = new USER();
  listCustomer?: USER[];
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
    this.navigatePassParam('/app/customer-edit', { customer: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/customer-view', { customer: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.customerService.Customer_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  search(){
    this.filterInput.rolE_USER_ID = 'ROL000000000002';
    this.customerService.Customer_search(this.filterInput).subscribe((response: any)=>{
      this.listCustomer = response;
      this.total = this.listCustomer!.length;
    });
  }
  onConfirm(name: string, code: string, id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
  }
}
