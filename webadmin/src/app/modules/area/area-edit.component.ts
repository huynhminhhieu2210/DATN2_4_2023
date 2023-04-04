import { Component, Injectable, Injector, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AREA } from 'src/app/core/models/AREA';
import { AreaService } from 'src/app/core/services/area.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  templateUrl: './area-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class AreaEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: AREA = new AREA();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.viewDetail;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới khu vực';
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa khu vực';
        this.byid();
        break;
      case EditPageState.viewDetail:
        this.title = 'Xem chi tiết khu vực';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private areaService: AreaService
    ) {
    super(injector);
    this.inputModel!.areA_ID = this.getRouteParam('area');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('area');
    this.areaService.Area_byid(id).subscribe((response: any)=>{
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
    if(!this.inputModel?.areA_ID){
      this.areaService.Area_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.areaService.Area_update(this.inputModel!).subscribe((response: any)=>{
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
