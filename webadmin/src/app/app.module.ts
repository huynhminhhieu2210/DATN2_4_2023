import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './modules/area/area.component';
import { BranchComponent } from './modules/branch/branch.component';
import { ColorComponent } from './modules/color/color.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DocImpProductComponent } from './modules/doc-imp-product/doc-imp-product.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { ProductTypeComponent } from './modules/product-type/product-type.component';
import { ProductsComponent } from './modules/products/products.component';
import { RoleUserComponent } from './modules/role-user/role-user.component';
import { SupplierComponent } from './modules/supplier/supplier.component';
import { UserComponent } from './modules/user/user.component';
import { WarehouseComponent } from './modules/warehouse/warehouse.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductTypeComponent,
    SupplierComponent,
    UserComponent,
    CustomerComponent,
    RoleUserComponent,
    DocImpProductComponent,
    BranchComponent,
    AreaComponent,
    ColorComponent,
    WarehouseComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
