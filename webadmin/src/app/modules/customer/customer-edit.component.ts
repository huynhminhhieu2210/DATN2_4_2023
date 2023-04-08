import { Component, Injectable, OnInit, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BRANCH } from 'src/app/core/models/BRANCH';
import { CUSTOMER } from 'src/app/core/models/CUSTOMER';
import { BranchService } from 'src/app/core/services/branch.service';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './customer-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class CustomerEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: CUSTOMER = new CUSTOMER();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    this.initCombobox();
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới tài khoản';
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa tài khoản';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết tài khoản';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private customerService: CustomerService,
    ) {
    super(injector);
    this.inputModel!.customeR_ID = this.getRouteParam('customer');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('customer');
    this.customerService.Customer_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.reloadView();
    });
  }
  initCombobox(){

  }
  onSave(){
    if(!this.inputModel?.customeR_ID){
      this.customerService.Customer_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.customerService.Customer_update(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Cập nhật thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }
    this.reloadView();
  }
}
