
import { Component, ElementRef, Injectable, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { BRANCH } from 'src/app/core/models/BRANCH';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './branch-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class BranchEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: BRANCH = new BRANCH();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  date?: string;
  isShowError = false;

  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới chi nhánh';
        this.inputModel!.creatE_ID = sessionStorage.getItem('username')?.toString();
        this.inputModel!.creatE_NAME = sessionStorage.getItem('userfullname')?.toString();
        this.date = moment().format('yyyy-MM-DD');
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa chi nhánh';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết chi nhánh';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private branchService: BranchService
    ) {
    super(injector);
    this.inputModel!.brancH_ID = this.getRouteParam('branch');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('branch');
    this.branchService.Branch_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.date = moment(response[0].creatE_DATE).format('yyyy-MM-DD');
      this.reloadView();
    });
  }
  onSave(){
    this.inputModel!.creatE_DATE = moment(this.date);
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      this.reloadView();
      return;
  }
    this.inputModel!.creatE_ID = sessionStorage.getItem('userid')?.toString();
    if(!this.inputModel?.brancH_ID){
      this.branchService.Branch_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.branchService.Branch_update(this.inputModel!).subscribe((response: any)=>{
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
