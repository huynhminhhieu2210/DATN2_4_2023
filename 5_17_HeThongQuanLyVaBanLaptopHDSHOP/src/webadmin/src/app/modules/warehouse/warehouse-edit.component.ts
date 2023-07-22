
import { Component, ElementRef, Injectable, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { BRANCH } from 'src/app/core/models/BRANCH';
import { WAREHOUSE } from 'src/app/core/models/WAREHOUSE';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './warehouse-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class WarehouseEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: WAREHOUSE = new WAREHOUSE();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  listBranch?: BRANCH[];
  isShowError = false;
  date?: string;
  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    this.initCombobox();
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới kho';
        this.inputModel!.creatE_ID = sessionStorage.getItem('username')?.toString();
        this.inputModel!.creatE_NAME = sessionStorage.getItem('userfullname')?.toString();
        this.date = moment().format('yyyy-MM-DD');
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa kho';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết kho';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private warehouseService: WarehouseService,
    private branchService: BranchService,
    ) {
    super(injector);
    this.inputModel!.warehousE_ID = this.getRouteParam('warehouse');
    this.editPageState = this.getRouteData('editPageState');
  }
  initCombobox(){
    var filtera = new BRANCH();
    this.branchService.Branch_search(filtera).subscribe((response: any)=>{
      this.listBranch = response;
    });
  }
  byid(){
    let id: string = this.getRouteParam('warehouse');
    this.warehouseService.Warehouse_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.date = moment(response[0].creatE_DATE).format('yyyy-MM-DD');
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
    //       sessionStorage.setItem("jwt", token);
    //       this.invalidLogin = false;
    //       this.router.navigate(["/"]);
    //     }, (err: any) => {
    //       this.invalidLogin = true;
    //     })
  }
  onSave(){
    this.inputModel!.creatE_DATE = moment(this.date);
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      return;
  }
    this.inputModel!.creatE_ID = sessionStorage.getItem('userid')?.toString();
    if(!this.inputModel?.warehousE_ID){
      this.warehouseService.Warehouse_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.warehouseService.Warehouse_update(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Cập nhật thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }
  }
}
