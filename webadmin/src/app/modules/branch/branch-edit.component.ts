
import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới chi nhánh';
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
