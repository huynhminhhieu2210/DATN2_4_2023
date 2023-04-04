import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './modules/area/area-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
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
import { AreaEditComponent } from './modules/area/area-edit.component';
import { EditPageState } from './shared/enum/edit-page-state';
import { BranchEditComponent } from './modules/branch/branch-edit.component';
import { BranchListComponent } from './modules/branch/branch-list.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'area', component: AreaListComponent },
  { path: 'area-add', component: AreaEditComponent, data: {  editPageState: EditPageState.add, }, },
  { path: 'area-edit', component: AreaEditComponent, data: { editPageState: EditPageState.edit, }, },
  { path: 'area-view', component: AreaEditComponent, data: { editPageState: EditPageState.viewDetail, }, },
  
  { path: 'branch', component: BranchListComponent, },
  { path: 'branch-add', component: BranchEditComponent, data: { editPageState: EditPageState.add, }, },
  { path: 'branch-edit', component: BranchEditComponent, data:{ editPageState: EditPageState.edit, }, },
  { path: 'branch-view', component: BranchEditComponent, data: { editPageState: EditPageState.viewDetail, }, },
  
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
