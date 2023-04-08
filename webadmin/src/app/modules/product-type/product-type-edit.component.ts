import { Component, Injectable, OnInit, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới loại sản phẩm';
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
      this.reloadView();
    });
  }
  login(form: NgForm){
    console.log(this.inputModel);
    // const credentials = {
    //   'username' : form.value.username,
    //   'password' : form.value.password
    // }
    //  this.http.post("https://localhost:5001/api/auth/login", credentials)
    //     .subscribe((response: any) => {
    //       const token = (<any>response).token;
    //       localStorage.setItem("jwt", token);
    //       this.invalidLogin = false;
    //       this.router.navigate(["/"]);
    //     }, (err: any) => {
    //       this.invalidLogin = true;
    //     })
  }
  onSave(){
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
    this.reloadView();
  }
}
