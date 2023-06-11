import { Component, Injector, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { PRODUCT_TYPE } from 'src/app/core/models/PRODUCT_TYPE';
import { SUPPLIER } from 'src/app/core/models/SUPPLIER';
import { USER } from 'src/app/core/models/USER';
import { WAREHOUSE } from 'src/app/core/models/WAREHOUSE';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ProductService } from 'src/app/core/services/product.service';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { ComponentBase } from 'src/app/shared/components/component-base';
@Component({
  templateUrl: './import-product-list.component.html'
})
export class ImportProductListComponent extends ComponentBase implements OnInit{
  
  constructor(injector: Injector,
    private productService: ProductService,
    private supplierService: SupplierService,
    private productTypeService: ProductTypeService,
    private warehouseService: WarehouseService,) {
    super(injector);
  }
  listProduct?: PRODUCT[];
  listWareHouse?: WAREHOUSE[];
  listProductType?: PRODUCT_TYPE[];
  listSupplier?: SUPPLIER[];
  tilte_info_delete?: string;
  id?: string;
  filterInput: PRODUCT  = new PRODUCT();
  ngOnInit(): void {
    this.search();
    this.initCombobox();
  }
  initCombobox(){
    var filtera = new SUPPLIER();
    this.supplierService.Supplier_search(filtera).subscribe((response: any)=>{
      this.listSupplier = response;
      if(this.listSupplier){
        var sup = new SUPPLIER();
        sup.supplieR_NAME = '---- Tất cả ----';
        this.listSupplier?.unshift(sup);
        this.filterInput.supplieR_ID = '';
      }
      this.reloadView();
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
      this.reloadView();
    });
    var filterc = new WAREHOUSE();
    this.warehouseService.Warehouse_search(filterc).subscribe((response: any)=>{
      this.listWareHouse = response;
      if(this.listWareHouse){
        var ware = new WAREHOUSE();
        ware.warehousE_NAME = '---- Tất cả ----';
        this.listWareHouse?.unshift(ware);
        this.filterInput.warehousE_ID = '';
      }
      this.reloadView();
    });
  }
  onEdit(item: any){
    this.navigatePassParam('/app/products-edit', { product: item }, { filterInput: JSON.stringify(undefined) });
  }
  onView(item: any){
    this.navigatePassParam('/app/products-view', { product: item }, { filterInput: JSON.stringify(undefined) });
  }
  onDel(){
    this.productService.Product__delete(this.id!).subscribe((response: any)=>{
      this.search()
      this.reloadView();
    });
  }
  search(){
    this.productService.Product__search(this.filterInput).subscribe((response: any)=>{
      this.listProduct = response;
      this.reloadView();
    });
  }
  onConfirm(name: string, code: string, id: string){
    this.id = id;
    this.tilte_info_delete = 'Bạn có chắc muốn xoá ' + code + '(' + name + ')';
    this.reloadView();
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
