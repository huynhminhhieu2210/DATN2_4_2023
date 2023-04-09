import { Component, Injector, OnInit } from '@angular/core';
import { AREA } from 'src/app/core/models/AREA';
import { AreaService } from 'src/app/core/services/area.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './area-list.component.html'
})
export class AreaListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private areaService: AreaService) {
    super(injector);
  }
  listArea?: AREA[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
  }
  onEdit(item: any){
    this.navigatePassParam('/app/area-edit', { area: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/area-view', { area: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.areaService.Area_delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    var filtera = new AREA();
    this.areaService.Area_search(filtera).subscribe((response: any)=>{
      this.listArea = response;
      this.reloadView();
    });
  }
  onConfirm(code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá '+ code;
    this.reloadView();
  }
}
