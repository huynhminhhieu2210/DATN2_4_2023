import { Component, Injectable, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BRANCH } from 'src/app/core/models/BRANCH';
import { ROLE_USER } from 'src/app/core/models/ROLE_USER';
import { USER } from 'src/app/core/models/USER';
import { BranchService } from 'src/app/core/services/branch.service';
import { RoleUserService } from 'src/app/core/services/role-user.service';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './user-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class UserEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: USER = new USER();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  listBranch?: BRANCH[];
  listRole?: ROLE_USER[];
  isShowError = false;

  @ViewChild('editForm') editForm?: ElementRef;
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
    private userService: UserService,
    private branchService: BranchService,
    private roleUserService: RoleUserService
    ) {
    super(injector);
    this.inputModel!.useR_ID = this.getRouteParam('user');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('user');
    this.userService.User_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.reloadView();
    });
  }
  initCombobox(){
    var filtera = new BRANCH();
    this.branchService.Branch_search(filtera).subscribe((response: any)=>{
      this.listBranch = response;
      this.reloadView();
    });
    var filterb = new ROLE_USER();
    this.roleUserService.Role_User_search(filterb).subscribe((response: any)=>{
      this.listRole = response;
      this.reloadView();
    });
  }
  onSave(){
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      this.reloadView();
      return;
  }
    if(!this.inputModel?.useR_ID){
      this.userService.User_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.userService.User_update(this.inputModel!).subscribe((response: any)=>{
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
