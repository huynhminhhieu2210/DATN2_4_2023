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

@Component({
  templateUrl: './import-product-edit.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class ImportProductEditComponent extends ComponentBase implements OnInit{
  invalidLogin: boolean | undefined;
  inputModel?: PRODUCT = new PRODUCT();
  EditPageState = EditPageState;
  editPageState?: EditPageState;
  title?:string; 
  titleinfo?: string;
  listSupplier?: SUPPLIER[];
  listProductType?: PRODUCT_TYPE[];
  isShowError = false;
  selectedFile?: File;
  private newBlogForm?: FormGroup;
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
        this.title = 'Thêm mới';
        break;
      case EditPageState.edit:
        this.title = 'Chỉnh sửa';
        this.byid();
        break;
      case EditPageState.view:
        this.title = 'Xem chi tiết';
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
    this.productService.Product__byid(id).subscribe((response: any)=>{
      this.inputModel = response[0];
      this.reloadView();
    });
  }
  initCombobox(){
    var filtera = new SUPPLIER();
    this.supplierService.Supplier_search(filtera).subscribe((response: any)=>{
      this.listSupplier = response;
      this.reloadView();
    });
    var filterb = new PRODUCT_TYPE();
    this.productTypeService.Product_Type_search(filterb).subscribe((response: any)=>{
      this.listProductType = response;
      this.reloadView();
    });
  }
  onSave(){
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      this.reloadView();
      return;
  }
    if(!this.inputModel?.producT_ID){
      this.productService.Product__insert(this.inputModel!).subscribe((response: any)=>{
        this.uploadFile(this.inputModel?.producT_ID);
        $("body, html").animate({scrollTop:0},0);
        this.titleinfo = 'Thêm mới thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }else{
      this.productService.Product__update(this.inputModel!).subscribe((response: any)=>{
        this.uploadFile(this.inputModel?.producT_ID);
        $("body, html").animate({scrollTop:0},0);
        this.titleinfo = 'Cập nhật thành công';
        setTimeout(() => {
          this.titleinfo = '';
        }, 5000);
      });
    }
    this.reloadView();
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
