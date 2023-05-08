import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INPUTCHANGEPASS } from 'src/app/core/models/INPUTCHANGEPASS';
import { USER } from 'src/app/core/models/USER';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends ComponentBase implements OnInit{
  userfullname?: string;
  email?: string;
  branchid?: string;
  roleusername?: string;
  usercode?: string;
  username?: string;
  phone?: string;
  address?: string;
  branchname?: string;
  ngOnInit(): void {
    this.inputModel!.useR_FULLNAME = this.userfullname = localStorage.getItem('userfullname')?.toString();
    this.inputModel!.useR_EMAIL = this.email = localStorage.getItem('email')?.toString();
    this.branchid = localStorage.getItem('branchid')?.toString();
    this.roleusername = localStorage.getItem('roleusername')?.toString();
    this.usercode = localStorage.getItem('usercode')?.toString();
    this.username = localStorage.getItem('username')?.toString();
    this.inputModel!.useR_PHONE = this.phone = localStorage.getItem('phone')?.toString();
    this.inputModel!.useR_ADDRESS = this.address = localStorage.getItem('address')?.toString();
    this.branchname = localStorage.getItem('branchname')?.toString();
  }
  @ViewChild('editForm') editForm?: ElementRef;
  @ViewChild('changePassForm') changePassForm?: ElementRef;
  inputModel?: USER = new USER();
  inputModelChangePass?: INPUTCHANGEPASS = new INPUTCHANGEPASS();
  isShowError = false;
  passOld?: string;
  passNew?: string;
  passNewCheck?: string;
  warning?: string;
  error?: string;
  indenerror_success?: boolean;
  constructor(
    injector: Injector,
    private userService: UserService,
    private http: HttpClient, 
    ) {
    super(injector);
  }
  onSave(){

  }
  onchangePass(form: NgForm){
    if ((this.changePassForm as any).form.invalid) {
      this.isShowError = true;
      return;
    }
    this.inputModelChangePass!.useR_NAME = localStorage.getItem('username')?.toString();
    this.inputModelChangePass!.type = 'customer';
    this.userService.User_change_pass(this.inputModelChangePass!).subscribe((response: any)=>{
      if(response[0].result == '1'){
        this.indenerror_success = false;
        this.error = 'Đổi mật khẩu thành công';
        setTimeout(() => {
          this.error =''
        }, 3000);
      }else if(response[0].result == '-1'){
        this.indenerror_success = true;
        this.error = 'Đổi mật khẩu không thành công';
        setTimeout(() => {
          this.error =''
        }, 3000);
      }
    });
  }
  onChangePassNewCheck(){
    if(this.inputModel?.useR_PASSWORDNEW != this.inputModel?.useR_PASSWORDNEWCHECK){
      this.warning = 'Mật khẩu mới không khớp'
    }else{
      this.warning = ''
    }
  }
  onEditInfoUserLogin(){
    var input = new USER();
    input.useR_NAME = localStorage.getItem('username')?.toString();
    input.useR_FULLNAME = this.inputModel?.useR_FULLNAME;
    input.useR_PHONE = this.inputModel?.useR_PHONE;
    input.useR_ADDRESS = this.inputModel?.useR_ADDRESS;
    input.useR_EMAIL = this.inputModel?.useR_EMAIL;
    this.userService.User_update_info(input).subscribe((response: any)=>{
      const credentials = {
        'useR_NAME' : localStorage.getItem('username')?.toString(),
        'password' : '',
        'type': 'admin'
      }
      this.http.post("https://localhost:5001/api/Users/USER_GET_INFO_LOGIN", credentials)
          .subscribe((response: any) => {
            localStorage.setItem('userid',response[0].useR_ID)
            localStorage.setItem('branchid',response[0].brancH_ID)
            localStorage.setItem('roleuserid',response[0].rolE_USER_ID)
            localStorage.setItem('roleusername',response[0].rolE_USER_NAME)
            localStorage.setItem('usercode',response[0].useR_CODE)
            localStorage.setItem('username',response[0].useR_NAME)
            localStorage.setItem('userfullname',response[0].useR_FULLNAME)
            localStorage.setItem('email',response[0].useR_EMAIL)
            localStorage.setItem('phone',response[0].useR_PHONE)
            localStorage.setItem('address',response[0].useR_ADDRESS)
            this.ngOnInit();
            this.indenerror_success = false;
            this.error = 'Cập nhật thông tin thành công';
            setTimeout(() => {
              this.error =''
            }, 3000);
          })
    });
  }
}
