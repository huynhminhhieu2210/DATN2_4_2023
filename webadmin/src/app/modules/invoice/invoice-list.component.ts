import { Component, Injector, OnInit } from '@angular/core';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { InvoiceDtailsService } from 'src/app/core/services/invoice-dt.service';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private invoiceService: InvoiceService,
    private invoiceDtailsService: InvoiceDtailsService,) {
    super(injector);
  }
  listInvoice?: INVOICE[];
  tilte_info_delete?: string;
  id?: string;
  ngOnInit(): void {
    this.search();
  }
  onEdit(item: any){
    this.navigatePassParam('/app/invoice-edit', { invoice: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/invoice-view', { invoice: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.invoiceService.Invoice_delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    var filtera = new INVOICE();
    this.invoiceService.Invoice_search(filtera).subscribe((response: any)=>{
      this.listInvoice = response;
      this.reloadView();
    });
  }
  onConfirm(code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code;
    this.reloadView();
  }
}
