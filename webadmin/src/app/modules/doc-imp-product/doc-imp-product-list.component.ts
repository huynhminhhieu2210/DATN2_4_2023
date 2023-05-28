import { Component, Injector, OnInit } from '@angular/core';
import { DOC_IMP_PRODUCT } from 'src/app/core/models/DOC_IMP_PRODUCT';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { STATUS } from 'src/app/core/models/STATUS';
import { DocImpProductDetailsService } from 'src/app/core/services/doc-imp-product-detail.service';
import { DocImpProductService } from 'src/app/core/services/doc-imp-product.service';
import { InvoiceDtailsService } from 'src/app/core/services/invoice-dt.service';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { StatusService } from 'src/app/core/services/status.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './doc-imp-product-list.component.html'
})
export class DocImportListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private docImpProductService: DocImpProductService,
    private docImpProductDetailsService: DocImpProductDetailsService,
    private statusService: StatusService,) {
    super(injector);
  }
  listDocImpProduct?: DOC_IMP_PRODUCT[];
  tilte_info_delete?: string;
  filterInput: DOC_IMP_PRODUCT = new DOC_IMP_PRODUCT();
  listStatus?: STATUS[] = [];
  id?: string;
  ngOnInit(): void {
    this.initCombobox();
    this.search();
  }
  initCombobox(){
    var filtera = new STATUS();
    this.statusService.Status_search(filtera).subscribe((response: any)=>{
      this.listStatus = response;
      if(this.listStatus){
        var status = new STATUS();
        status.statuS_NAME = '---- Tất cả ----';
        this.listStatus?.unshift(status);
        this.filterInput.status = '';
      }
    });
  }
  onEdit(item: any){
    this.navigatePassParam('/app/doc-imp-product-edit', { docimpproduct: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/doc-imp-product-view', { docimpproduct: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.docImpProductService.Doc_Imp_Product_delete(this.id!).subscribe((response: any)=>{
      this.search()
    });
  }
  search(){
    this.docImpProductService.Doc_Imp_Product_search(this.filterInput).subscribe((response: any)=>{
      this.listDocImpProduct = response;
    });
  }
  onConfirm(code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code;
  }
  onConfirmChange(code: string,id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn thay đổi trạng thái ' + code;
  }
  onChangeStatus(){
    // var filtera = new INVOICE();
    // filtera.invoicE_ID = this.id;
    // this.docImpProductService.Invoice_change_status(filtera).subscribe((response: any)=>{
    //   this.search()
    // });
  }
  formatCurrency(num: any)
  {
    let sign: any;
    let cents: any;
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
    {
        num = "0";
    }

    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
    {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + num + 'đ');
  }
}
