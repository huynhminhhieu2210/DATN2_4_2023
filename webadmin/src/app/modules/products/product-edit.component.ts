import { Component, Injectable, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BRANCH } from 'src/app/core/models/BRANCH';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { BranchService } from 'src/app/core/services/branch.service';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ProductService } from 'src/app/core/services/product.service';
import { RoleUserService } from 'src/app/core/services/role-user.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
import { EditPageState } from 'src/app/shared/enum/edit-page-state';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  templateUrl: './product-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class ProductEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  public Editor = ClassicEditor;
  inputModel?: PRODUCT = new PRODUCT();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  listSupplier?: SUPPLIER[];
  listProductType?: PRODUCT_TYPE[];
  isShowError = false;
  selectedFile?: File;
  imgCurennt?: string;
  private newBlogForm?: FormGroup;
  titleerorr?: string;
  @ViewChild('editForm') editForm?: ElementRef;
  get disabledInput(): boolean{
    return this.editPageState == EditPageState.view;
  }
  ngOnInit(): void {
    this.newBlogForm = new FormGroup({
      Name: new FormControl(null),
      TileImage: new FormControl(null)
    });
    this.initCombobox();
    switch (this.editPageState) {
      case EditPageState.add:
        this.title = 'Thêm mới sản phẩm';
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa sản phẩm';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết sản phẩm';
        this.byid();
        break;
  }
  }
  constructor(
    injector: Injector,
    private productService: ProductService,
    private supplierService: SupplierService,
    private productTypeService: ProductTypeService,
    private uploadFileService: UploadFileService
    ) {
    super(injector);
    this.inputModel!.producT_ID = this.getRouteParam('product');
    this.editPageState = this.getRouteData('editPageState');
  }
  public onReady() {

}
  byid(){
    let id: string = this.getRouteParam('product');
    this.productService.Product_byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.imgCurennt = this.inputModel?.imG_URL;
    });
  }
  initCombobox(){
    var filtera = new SUPPLIER();
    this.supplierService.Supplier_search(filtera).subscribe((response: any)=>{
      this.listSupplier = response;
    });
    var filterb = new PRODUCT_TYPE();
    this.productTypeService.Product_Type_search(filterb).subscribe((response: any)=>{
      this.listProductType = response;
    });
  }
  onSave(){
    this.titleinfo = '';
    this.titleerorr = '';
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      $("body, html").animate({scrollTop:0},0);
      this.titleerorr = 'Dữ liệu không hợp lệ';
      return;
  }
    if(!this.inputModel?.producT_ID){
      this.productService.Product_insert(this.inputModel!).subscribe((response: any)=>{
        this.inputModel!.producT_ID = response[0].id;
        this.uploadFile( response[0].id);
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
    }else{
      this.productService.Product_update(this.inputModel!).subscribe((response: any)=>{
        this.uploadFile(this.inputModel?.producT_ID);
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
  }
  onSelectFile(fileInput: any) {
      this.selectedFile = <File>fileInput.target.files[0];
  }
  
  uploadFile(id: any) {
    
    const formData = new FormData();
    formData.append('reF_ID', id);
    formData.append('file', this.selectedFile!);
  
    this.uploadFileService.upload(formData).subscribe((response: any)=>{
      console.log(response);
    });
  
    this.newBlogForm!.reset();
  }
}
