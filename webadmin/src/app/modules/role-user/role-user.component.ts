import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROLE_USER } from 'src/app/core/models/ROLE_USER';
import { TOP_RESULT } from 'src/app/core/models/TOP_RESULT';
import { CustomerService } from 'src/app/core/services/customer.service';
import { RoleUserService } from 'src/app/core/services/role-user.service';
import { TopResultService } from 'src/app/core/services/top-result.service';
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
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  filterInput: ROLE_USER = new ROLE_USER();
  total?: number;
  ngOnInit(): void {
    this.filterInput!.top = 5;
    this.loadTopResult();
    this.search();
  }
  loadTopResult(){
    var filtertr = new TOP_RESULT();
    this.topResultService.Top_result_search(filtertr).subscribe((response: any)=>{
      this.tableSizes = response;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(): void {
    this.tableSize = this.filterInput.top!;
    this.page = 1;
  }
  constructor(
    injector: Injector,
    private roleUserService: RoleUserService,
    private topResultService: TopResultService
    ) {
    super(injector);
  }
  onSave(form: NgForm){
    var input = new ROLE_USER();
    input.rolE_USER_CODE = form.value.rolE_USER_CODE;
    input.rolE_USER_NAME = form.value.rolE_USER_NAME;
    this.roleUserService.Role_User_insert(input).subscribe((response: any)=>{
      this.ngOnInit();
    });
  }
  search(){
    this.roleUserService.Role_User_search(this.filterInput).subscribe((response: any)=>{
      this.lstRoleUser = response;
      this.total = this.lstRoleUser!.length;
    });
  }
  onDel(){
    this.roleUserService.Role_User_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  onConfirm(name: string, code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
  }
}
