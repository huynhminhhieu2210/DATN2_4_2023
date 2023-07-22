import { Component, Injector, OnInit } from '@angular/core';
import { TOP_RESULT } from 'src/app/core/models/TOP_RESULT';
import { USER } from 'src/app/core/models/USER';
import { TopResultService } from 'src/app/core/services/top-result.service';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private userService: UserService,
    private topResultService: TopResultService) {
    super(injector);
  }
  listUser?: USER[];
  filterInput: USER = new USER();
  total?: number;
  tilte_info_delete?: string;
  id?: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
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
  onEdit(item: any){
    this.navigatePassParam('/app/user-edit', { user: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/user-view', { user: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.userService.User_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  search(){
    this.filterInput.rolE_USER = 'STAFF';
    this.filterInput.methoD_LOGIN = 'NORMAL';
    this.filterInput.creatE_ID = sessionStorage.getItem('username')?.toString();
    this.userService.User_search(this.filterInput).subscribe((response: any)=>{
      this.listUser = response;
      this.total = this.listUser!.length;
    });
  }
  onConfirm(name: string, code: string, id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
  }
}
