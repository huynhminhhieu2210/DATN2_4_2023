import { Component, Injector, OnInit } from '@angular/core';
import { USER } from 'src/app/core/models/USER';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private userService: UserService) {
    super(injector);
  }
  listUser?: USER[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
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
      this.reloadView();
    });
  }
  search(){
    var filtera = new USER();
    this.userService.User_search(filtera).subscribe((response: any)=>{
      this.listUser = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string, id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
  }
}
