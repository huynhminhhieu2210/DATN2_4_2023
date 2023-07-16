import { Component, Injectable, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './product-type-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class ProductTypeEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: PRODUCT_TYPE = new PRODUCT_TYPE();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  titleerorr?: string;
  date?: string;
  isShowError = false;
  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới loại sản phẩm';
        this.inputModel!.creatE_ID = sessionStorage.getItem('username')?.toString();
        this.inputModel!.creatE_NAME = sessionStorage.getItem('userfullname')?.toString();
        this.date = moment().format('yyyy-MM-DD');
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa loại sản phẩm';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết loại sản phẩm';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private productTypeService: ProductTypeService
    ) {
    super(injector);
    this.inputModel!.producT_TYPE_ID = this.getRouteParam('producttype');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('producttype');
    this.productTypeService.Product_Type_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.date = moment(response[0].creatE_DATE).format('yyyy-MM-DD');
    });
  }
  onSave(){
    this.titleinfo = '';
    this.titleerorr = '';
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      $("body, html").animate({scrollTop:0},0);
      this.titleerorr = 'Dữ liệu không hợp lệ';
      return;
    }
    this.inputModel!.creatE_DATE = moment(this.date);
    if(!this.inputModel?.producT_TYPE_ID){
      this.productTypeService.Product_Type_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.productTypeService.Product_Type_update(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Cập nhật thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }
  }
}
