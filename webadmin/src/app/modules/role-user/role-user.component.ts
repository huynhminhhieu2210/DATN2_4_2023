import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROLE_USER } from 'src/app/core/models/ROLE_USER';
import { CustomerService } from 'src/app/core/services/customer.service';
import { RoleUserService } from 'src/app/core/services/role-user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';

@Component({
  selector: 'app-role-user',
  templateUrl: './role-user.component.html'
})
export class RoleUserComponent extends ComponentBase implements OnInit{
  inputModel?: ROLE_USER;
  lstRoleUser?: ROLE_USER[];
  id?: string;
  tilte_info_delete?: string;
  ngOnInit(): void {
    this.search();
  }
  constructor(
    injector: Injector,
    private roleUserService: RoleUserService,
    ) {
    super(injector);
  }
  onSave(form: NgForm){
    var input = new ROLE_USER();
    input.rolE_USER_CODE = form.value.rolE_USER_CODE;
    input.rolE_USER_NAME = form.value.rolE_USER_NAME;
    this.roleUserService.Role_User_insert(input).subscribe((response: any)=>{
      this.ngOnInit();
      this.reloadView();
    });
  }
  search(){
    var filtera = new ROLE_USER();
    this.roleUserService.Role_User_search(filtera).subscribe((response: any)=>{
      this.lstRoleUser = response;
      this.reloadView();
    });
  }
  onDel(){
    this.roleUserService.Role_User_delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
