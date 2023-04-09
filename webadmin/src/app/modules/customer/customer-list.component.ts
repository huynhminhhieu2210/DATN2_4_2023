import { Component, Injector, OnInit } from '@angular/core';
import { USER } from 'src/app/core/models/USER';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private customerService: CustomerService) {
    super(injector);
  }
  listCustomer?: USER[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
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
      this.reloadView();
    });
  }
  search(){
    var filtera = new USER();
    this.customerService.Customer_search(filtera).subscribe((response: any)=>{
      this.listCustomer = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string, id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
