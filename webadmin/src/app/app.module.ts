import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { RoleUserComponent } from './role-user/role-user.component';
import { DocImpProductComponent } from './doc-imp-product/doc-imp-product.component';
import { BranchComponent } from './branch/branch.component';
import { AreaComponent } from './area/area.component';
import { ColorComponent } from './color/color.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { InvoiceComponent } from './invoice/invoice.component';

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
