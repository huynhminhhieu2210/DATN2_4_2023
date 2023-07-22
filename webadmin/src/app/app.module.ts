import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/header/sidebar.component';
import { NavBarComponent } from './shared/header/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from './modules/user/user-edit.component';
import { UserListComponent } from './modules/user/user-list.component';
import { CustomerEditComponent } from './modules/customer/customer-edit.component';
import { CustomerListComponent } from './modules/customer/customer-list.component';
import { ProductTypeEditComponent } from './modules/product-type/product-type-edit.component';
import { ProductTypeListComponent } from './modules/product-type/product-type-list.component';
import { SupplierEditComponent } from './modules/supplier/supplier-edit.component';
import { SupplierListComponent } from './modules/supplier/supplier-list.component';
import { AuthGuard } from './core/guards/auth-guards.service';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { WarehouseEditComponent } from './modules/warehouse/warehouse-edit.component';
import { WarehouseListComponent } from './modules/warehouse/warehouse-list.component';
import { InvoiceListComponent } from './modules/invoice/invoice-list.component';
import { InvoiceEditComponent } from './modules/invoice/invoice-edit.component';
import { ProductEditComponent } from './modules/products/product-edit.component';
import { ProductListComponent } from './modules/products/product-list.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { NgChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DocImportListComponent } from './modules/doc-imp-product/doc-imp-product-list.component';
import { DocImportEditComponent } from './modules/doc-imp-product/doc-imp-product-edit.component';
import { DataTablesModule } from 'angular-datatables';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { DateTimeFormatPipe } from './shared/pipes/datetime-format.pipe';

export function tokenGetter(){
  return sessionStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductTypeListComponent,
    ProductTypeEditComponent,
    SupplierEditComponent,
    SupplierListComponent,
    UserEditComponent,
    UserListComponent,
    CustomerEditComponent,
    CustomerListComponent,
    WarehouseListComponent,
    WarehouseEditComponent,
    InvoiceListComponent,
    InvoiceEditComponent,
    HeaderComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    DateFormatPipe,
    ProductEditComponent,
    ProductListComponent,
    ProfileComponent,
    DocImportListComponent,
    DocImportEditComponent,
    DateTimeFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    MatDatepickerModule,
    DataTablesModule,
    CKEditorModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
