import { Component, Injectable, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { USER } from 'src/app/core/models/USER';
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
  inputModel?: USER = new USER();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  date?: string;
  isShowError = false;
  titleerorr?: string;
  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    this.initCombobox();
    switch (this.editPageState) {
      // case EditPageState.add:
      //   this.title = 'Thêm mới tài khoản';
      //   this.inputModel!.creatE_ID = sessionStorage.getItem('username')?.toString();
      //   this.inputModel!.creatE_NAME = sessionStorage.getItem('userfullname')?.toString();
      //   this.date = moment().format('yyyy-MM-DD');
      //   break;
      // case EditPageState.edit:
      //   this.title = 'Chỉnh sửa tài khoản';
      //   this.byid();
      //   break;
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
    this.inputModel!.useR_ID = this.getRouteParam('customer');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('customer');
    this.customerService.Customer_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.date = moment(response[0].creatE_DATE).format('yyyy-MM-DD');
    });
  }
  initCombobox(){

  }
  onSave(){
    this.inputModel!.creatE_DATE = moment(this.date);
    this.inputModel!.rolE_USER = 'CUSTOMER';
    this.inputModel!.methoD_LOGIN = 'NORMAL';
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      return;
    }
    if(!this.inputModel?.useR_ID){
      this.customerService.Customer_insert(this.inputModel!).subscribe((response: any)=>{
        if(response[0].result != '0'){
          $("body, html").animate({scrollTop:0},0);
          this.titleerorr = response[0].errorDesc;
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
        }
        else{
          $("body, html").animate({scrollTop:0},0);
          this.titleinfo = response[0].errorDesc;
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }
      });
    }else{
      this.customerService.Customer_update(this.inputModel!).subscribe((response: any)=>{
        if(response[0].result != '0'){
          $("body, html").animate({scrollTop:0},0);
          this.titleerorr = response[0].errorDesc;
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
        }
        else{
          $("body, html").animate({scrollTop:0},0);
          this.titleinfo = response[0].errorDesc;
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }
      });
    }
  }
}
