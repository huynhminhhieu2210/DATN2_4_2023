import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './modules/area/area.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BranchComponent } from './modules/branch/branch.component';
import { ColorComponent } from './modules/color/color.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { DocImpProductComponent } from './modules/doc-imp-product/doc-imp-product.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { ProductTypeComponent } from './modules/product-type/product-type.component';
import { ProductsComponent } from './modules/products/products.component';
import { RoleUserComponent } from './modules/role-user/role-user.component';
import { SupplierComponent } from './modules/supplier/supplier.component';
import { UserComponent } from './modules/user/user.component';
import { WarehouseComponent } from './modules/warehouse/warehouse.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'area', component: AreaComponent },
  { path: 'branch', component: BranchComponent },
  { path: 'color', component: ColorComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'doc-imp-product', component: DocImpProductComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'product-type', component: ProductTypeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'role-user', component: RoleUserComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'user', component: UserComponent },
  { path: 'warehouse', component: WarehouseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
