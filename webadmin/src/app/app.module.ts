import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaListComponent } from './modules/area/area-list.component';
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
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/header/sidebar.component';
import { NavBarComponent } from './shared/header/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { AreaEditComponent } from './modules/area/area-edit.component';
import { FormsModule } from '@angular/forms';
import { BranchEditComponent } from './modules/branch/branch-edit.component';
import { BranchListComponent } from './modules/branch/branch-list.component';

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
    BranchListComponent,
    BranchEditComponent,
    AreaListComponent,
    AreaEditComponent,
    ColorComponent,
    WarehouseComponent,
    InvoiceComponent,
    HeaderComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
