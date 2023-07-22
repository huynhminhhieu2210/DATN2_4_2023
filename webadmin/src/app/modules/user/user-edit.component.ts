import { Component, Injectable, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { USER } from 'src/app/core/models/USER';
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
  isShowError = false;
  date?: string;
  titleerorr?: string;
  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới tài khoản';
        this.inputModel!.creatE_ID = sessionStorage.getItem('username')?.toString();
        this.inputModel!.creatE_NAME = sessionStorage.getItem('userfullname')?.toString();
        this.date = moment().format('yyyy-MM-DD');
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
    ) {
    super(injector);
    this.inputModel!.useR_ID = this.getRouteParam('user');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('user');
    this.userService.User_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.inputModel!.useR_PASSWORD = '';
      this.date = moment(response[0].creatE_DATE).format('yyyy-MM-DD');
    });
  }
  onSave(){
    this.titleerorr = '';
    this.titleinfo = '';
    this.inputModel!.creatE_DATE = moment(this.date);
    this.inputModel!.rolE_USER = 'STAFF';
    this.inputModel!.methoD_LOGIN = 'NORMAL';
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      return;
    }
    if(!this.inputModel?.useR_ID){
      this.userService.User_insert(this.inputModel!).subscribe((response: any)=>{
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
          this.inputModel!.useR_ID = response[0].id;
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }
      });
    }else{
      this.userService.User_update(this.inputModel!).subscribe((response: any)=>{
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
