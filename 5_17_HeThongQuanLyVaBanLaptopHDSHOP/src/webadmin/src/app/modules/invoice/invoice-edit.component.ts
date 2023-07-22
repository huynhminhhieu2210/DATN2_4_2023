import { Component, Injectable, OnInit, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INVOICE_DT } from 'src/app/core/models/INVOICE_DT';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { InvoiceDtailsService } from 'src/app/core/services/invoice-dt.service';

@Component({
  templateUrl: './invoice-edit.component.html',
})

export class InvoiceEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: INVOICE = new INVOICE();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  listInvoiceDt?: INVOICE_DT[];
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới hoá đơn';
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa hoá đơn';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết hoá đơn';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private invoiceService: InvoiceService,
    private invoiceDtailsService: InvoiceDtailsService
    ) {
    super(injector);
    this.inputModel!.invoicE_ID = this.getRouteParam('invoice');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('invoice');
    this.invoiceService.Invoice_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
    });
    var filter = new INVOICE_DT();
    filter.invoicE_ID = id;
    this.invoiceDtailsService.Invoice_detail_search(filter).subscribe((response: any)=>{
      this.listInvoiceDt = response;
    });
  }
}
