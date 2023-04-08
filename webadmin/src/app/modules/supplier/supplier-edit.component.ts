
import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './supplier-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class SupplierEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: SUPPLIER = new SUPPLIER();
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
        this.title = 'Thêm mới nhà cung cấp';
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa nhà cung cấp';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết nhà cung cấp';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private supplierService: SupplierService
    ) {
    super(injector);
    this.inputModel!.supplieR_ID = this.getRouteParam('supplier');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('supplier');
    this.supplierService.Supplier_byid(id).subscribe((response: any)=>{
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
    if(!this.inputModel?.supplieR_ID){
      this.supplierService.Supplier_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.supplierService.Supplier_update(this.inputModel!).subscribe((response: any)=>{
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
