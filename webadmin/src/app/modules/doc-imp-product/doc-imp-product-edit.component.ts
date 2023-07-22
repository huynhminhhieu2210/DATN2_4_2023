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
import { WAREHOUSE } from 'src/app/core/models/WAREHOUSE';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { APPROVE } from 'src/app/core/models/APPROVE';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { ProductService } from 'src/app/core/services/product.service';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
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
  filterInput: PRODUCT  = new PRODUCT();
  titleerorr?: string;
  listInvoiceDt?: DOC_IMP_PRODUCT_DT[] = [];
  listProducts?: PRODUCT[] = [];
  dateTime: string | undefined;
  lstWarehouse?: WAREHOUSE[];
  isShowError = false;
  total?: string;
  checkAll: boolean = false;
  checkAllModal: boolean = false;
  listProductType?: PRODUCT_TYPE[];
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
    this.initCombobox();
  }
  constructor(
    injector: Injector,
    private docImpProductService: DocImpProductService,
    private docImpProductDetailsService: DocImpProductDetailsService,
    private warehouseService: WarehouseService,
    private productService: ProductService,
    private productTypeService: ProductTypeService,
    ) {
    super(injector);
    this.inputModel!.doC_IMP_PRODUCT_ID = this.getRouteParam('docimpproduct');
    this.editPageState = this.getRouteData('editPageState');
  }
  initCombobox(){
    var filtera = new WAREHOUSE();
    this.warehouseService.Warehouse_search(filtera).subscribe((response: any)=>{
      this.lstWarehouse = response;
    });
    var filterb = new PRODUCT_TYPE();
    this.productTypeService.Product_Type_search(filterb).subscribe((response: any)=>{
      this.listProductType = response;
      if(this.listProductType){
        var type = new PRODUCT_TYPE();
        type.producT_TYPE_NAME = '---- Tất cả ----';
        this.listProductType?.unshift(type);
        this.filterInput.producT_TYPE_ID = '';
      }
    });
  }
  byid(){
    let id: string = this.getRouteParam('docimpproduct');
    this.docImpProductService.Doc_Imp_Product_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.dateTime = this.inputModel!.creatE_DATE?.toString().slice(0,16);
      this.total = this.formatCurrency(this.inputModel?.total);
    });
    var filter = new DOC_IMP_PRODUCT_DT();
    filter.doC_IMP_PRODUCT_ID = id;
    this.docImpProductDetailsService.Doc_Imp_Product_Dt_search(filter).subscribe((response: any)=>{
      this.listInvoiceDt = response;
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
      this.listInvoiceDt = [];
      this.ExcelData.forEach((element: any) => {
        var item = new DOC_IMP_PRODUCT_DT();
        item.producT_CODE = element['Mã sản phẩm'].toString();
        item.producT_NAME = element['Tên sản phẩm'].toString();
        item.quantity = parseInt(element['Số lượng']);
        item.price = parseInt(element['Đơn giá']);
        item.checkbox = false;
        if(this.listInvoiceDt!.filter(x=>x.producT_CODE == item.producT_CODE).length > 0){
          this.listInvoiceDt = [];
          $("body, html").animate({scrollTop:0},0);
          this.titleerorr = 'Mã sản phẩm không được trùng. Vui lòng kiểm tra lại!';
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
          return;
        }
        this.listInvoiceDt?.push(item);
      });
      console.log(this.listInvoiceDt);
      this.reloadTongTien();
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
    this.titleerorr = '';
    this.titleinfo = '';
    this.inputModel!.lsT_DOC_IMP_PRODUCT_DT =  this.listInvoiceDt;
    if ((this.editForm as any).form.invalid) {
      $("body, html").animate({scrollTop:0},0);
      this.titleerorr = 'Dữ liệu nhập không hợp lệ.';
      this.isShowError = true;
      return;
    }
    if(this.listInvoiceDt == undefined ||  this.listInvoiceDt.length < 1){
      $("body, html").animate({scrollTop:0},0);
      this.titleerorr = 'Bảng danh sách sản phẩm không được để trống.';
      this.isShowError = true;
      return;
    }
    var i = 1;
    var checkrequired = false;
    this.listInvoiceDt!.forEach(element => {
      if(element.quantity == 0 || element.quantity == undefined){
        $("body, html").animate({scrollTop:0},0);
        this.titleerorr = 'Bảng danh sách sản phẩm. Dòng ' + i + ': số lượng không được bằng 0 hoặc để trống.';
        checkrequired = true;
        return;
      }
      if(element.price == 0 || element.price == undefined){
        $("body, html").animate({scrollTop:0},0);
        this.titleerorr = 'Bảng danh sách sản phẩm. Dòng ' + i + ': đơn giá không được bằng 0 hoặc để trống.';
        checkrequired = true;
        return;
      }
      i++;
    });
    if(checkrequired){
      return;
    }
    if(!this.inputModel?.doC_IMP_PRODUCT_ID){
      this.docImpProductService.Doc_Imp_Product_insert(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        if(response[0].result != '0'){
          $("body, html").animate({scrollTop:0},0);
          this.titleerorr = response[0].errorDesc;
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
        }
        else{
          $("body, html").animate({scrollTop:0},0);
          this.titleinfo = response[0].errorDesc;
          this.inputModel!.doC_IMP_PRODUCT_ID = response[0].id; 
          this.inputModel!.doC_IMP_PRODUCT_CODE = response[0].id; 
          this.editPageState = EditPageState.view;
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }

      });
    }else{
      this.docImpProductService.Doc_Imp_Product_update(this.inputModel!).subscribe((response: any)=>{
        console.log(response);
        if(response[0].result != '0'){
          $("body, html").animate({scrollTop:0},0);
          this.titleerorr = response[0].errorDesc;
          setTimeout(() => {
            this.titleerorr = '';
          }, 5000);
        }
        else{
          $("body, html").animate({scrollTop:0},0);
          this.titleinfo = response[0].errorDesc;
          this.inputModel!.doC_IMP_PRODUCT_ID = response[0].id; 
          this.inputModel!.doC_IMP_PRODUCT_CODE = response[0].id; 
          setTimeout(() => {
            this.titleinfo = '';
          }, 5000);
        }
      });
    }
  }
  onAccess(){
    var inputApprove = new APPROVE();
    inputApprove.reF_ID = this.inputModel?.doC_IMP_PRODUCT_ID;
    inputApprove.checker = sessionStorage.getItem('username')?.toString();;
    inputApprove.content = 'Duyệt';
    this.docImpProductService.Doc_Imp_Product_Access(inputApprove).subscribe((response: any)=>{
      if(response[0].result != '0'){
        $("body, html").animate({scrollTop:0},0);
        this.titleerorr = response[0].errorDesc;
        setTimeout(() => {
          this.titleerorr = '';
        }, 5000);
      }
      else{
        $("body, html").animate({scrollTop:0},0);
        this.titleinfo = response[0].errorDesc;
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      }
    });
  }
  onChangeCheckbox(num: any){
    if(this.listInvoiceDt![num].checkbox){
      this.listInvoiceDt![num].checkbox = false;
    }else{
      this.listInvoiceDt![num].checkbox = true;
    }
  }
  onChangeCheckboxAll(){
    if(this.checkAll){
      this.checkAll = false;
      this.listInvoiceDt!.forEach(element => {
        element.checkbox = false;
      });
    }else{
      this.checkAll = true;
      this.listInvoiceDt!.forEach(element => {
        element.checkbox = true;
      });
    }
  }
  onChangeCheckboxModal(num: any){
    if(this.listProducts![num].checkbox){
      this.listProducts![num].checkbox = false;
    }else{
      this.listProducts![num].checkbox = true;
    }
  }
  onChangeCheckboxAllModal(){
    if(this.checkAllModal){
      this.checkAllModal = false;
      this.listProducts!.forEach(element => {
        element.checkbox = false;
      });
    }else{
      this.checkAllModal = true;
      this.listProducts!.forEach(element => {
        element.checkbox = true;
      });
    }
  }
  onChangeQuantity(num: any, quantity: any){
    this.listInvoiceDt![num].quantity = quantity;
    this.reloadTongTien();
  }
  onChangePrice(num: any, price: any){
    this.listInvoiceDt![num].price = price;
    this.reloadTongTien();
  }
  onDeleteRowCheck(){
    this.listInvoiceDt = this.listInvoiceDt?.filter(x=>x.checkbox == false);
    this.checkAll = false;
  }
  searchModal(){
    this.productService.Product_customer_search(this.filterInput).subscribe((response: any)=>{
      this.listProducts = response;
    });
  }
  reloadTongTien(){
    var tongtien = 0;
    this.listInvoiceDt!.forEach(element => {
      tongtien = tongtien + (element.quantity! * element.price!);
    });
    this.inputModel!.total = tongtien;
    this.total = this.formatCurrency(this.inputModel?.total);
  }
  onSubmitModal(){
    var lst = this.listProducts!.filter(x=>x.checkbox == true);
    lst.forEach(element => {
      var item = new DOC_IMP_PRODUCT_DT();
      item.producT_CODE = element.producT_CODE;
      item.producT_NAME = element.producT_NAME;
      item.quantity = 0;
      item.price = element.price;
      item.checkbox = false;
      if(this.listInvoiceDt!.filter(x=>x.producT_CODE == item.producT_CODE).length > 0){
        $("body, html").animate({scrollTop:0},0);
        this.titleerorr = 'Mã sản phẩm không được trùng. Vui lòng kiểm tra lại!';
        setTimeout(() => {
          this.titleerorr = '';
        }, 5000);
        return;
      }
      this.listInvoiceDt?.push(item);
    });
    this.checkAllModal = false;
    this.listProducts!.forEach(element => {
      element.checkbox = false;
    });
  }
  onDownloadFileImport(){
    window.location.href = 'https://localhost:5001/file_import/Import_san_pham_nhap_hang.xlsx';
  }
}
