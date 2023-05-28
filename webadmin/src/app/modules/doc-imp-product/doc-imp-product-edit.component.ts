import { Component, Injectable, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INVOICE_DT } from 'src/app/core/models/INVOICE_DT';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { InvoiceDtailsService } from 'src/app/core/services/invoice-dt.service';
import * as XLSX from 'xlsx';
import { DOC_IMP_PRODUCT_DT } from 'src/app/core/models/DOC_IMP_PRODUCT_DT';
import { DOC_IMP_PRODUCT } from 'src/app/core/models/DOC_IMP_PRODUCT';
import * as moment from 'moment';
import { DocImpProductService } from 'src/app/core/services/doc-imp-product.service';
import { DocImpProductDetailsService } from 'src/app/core/services/doc-imp-product-detail.service';
@Component({
  templateUrl: './doc-imp-product-edit.component.html',
})

export class DocImportEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: DOC_IMP_PRODUCT = new DOC_IMP_PRODUCT();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  titleerorr?: string;
  listInvoiceDt?: DOC_IMP_PRODUCT_DT[] = [];
  dateTime: string | undefined;
  isShowError = false;
  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới hoá đơn';
        this.inputModel!.receiveR_NAME = sessionStorage.getItem('userfullname')?.toString();
        this.inputModel!.receiver = sessionStorage.getItem('username')?.toString();
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        this.dateTime = now.toISOString().slice(0,16);
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
    private docImpProductService: DocImpProductService,
    private docImpProductDetailsService: DocImpProductDetailsService
    ) {
    super(injector);
    this.inputModel!.doC_IMP_PRODUCT_ID = this.getRouteParam('docimpproduct');
    this.editPageState = this.getRouteData('editPageState');
  }
  byid(){
    let id: string = this.getRouteParam('docimpproduct');
    this.docImpProductService.Doc_Imp_Product_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.reloadView();
    });
    var filter = new DOC_IMP_PRODUCT_DT();
    filter.doC_IMP_PRODUCT_ID = id;
    this.docImpProductDetailsService.Doc_Imp_Product_Dt_search(filter).subscribe((response: any)=>{
      this.listInvoiceDt = response;
      this.reloadView();
    });
  }
  ExcelData: any;
  ImportExcel(event: any){
    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e)=>{
      var workBook = XLSX.read(fileReader.result,{type:'binary'});
      var sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      var tongtien = 0;
      this.ExcelData.forEach((element: any) => {
        var item = new DOC_IMP_PRODUCT_DT();
        item.producT_CODE = element['Tên sản phẩm'];
        item.producT_NAME = element['Mã sản phẩm'];
        item.quantity = element['Số lượng'];
        item.price = element['Đơn giá'];
        tongtien = tongtien + element['Số lượng'] * element['Đơn giá'];
        this.listInvoiceDt?.push(item);
      });
      this.inputModel!.total = tongtien;
    }
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
  onSave(){
    this.inputModel!.lsT_DOC_IMP_PRODUCT_DT =  this.listInvoiceDt;
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      return;
  }
    if(!this.inputModel?.doC_IMP_PRODUCT_ID){
      this.docImpProductService.Doc_Imp_Product_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        if(response[0].result != '0'){
          this.titleerorr = response[0].errordesc;
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
        }
        else{
          this.titleinfo = response[0].errordesc;
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }

      });
    }else{
      this.docImpProductService.Doc_Imp_Product_update(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        if(response[0].result != '0'){
          this.titleerorr = response[0].errordesc;
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
        }
        else{
          this.titleinfo = response[0].errordesc;
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }
      });
    }
  }
}
