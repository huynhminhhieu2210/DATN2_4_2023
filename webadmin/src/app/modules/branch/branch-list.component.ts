import { Component, OnInit, Injector } from '@angular/core';
import { AREA } from 'src/app/core/models/AREA';
import { BRANCH } from 'src/app/core/models/BRANCH';
import { AreaService } from 'src/app/core/services/area.service';
import { BranchService } from 'src/app/core/services/branch.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './branch-list.component.html'
})
export class BranchListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private branchService: BranchService) {
    super(injector);
  }
  listbranch?: BRANCH[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
  }
  onEdit(item: any){
    this.navigatePassParam('/app/branch-edit', { branch: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/branch-view', { branch: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.branchService.Branch_delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    var filtera = new BRANCH();
    this.branchService.Branch_search(filtera).subscribe((response: any)=>{
      this.listbranch = response;
      this.reloadView();
    });
  }
  onConfirm(code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá '+ code;
    this.reloadView();
  }
}
