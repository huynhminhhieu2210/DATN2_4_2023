import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './modules/area/area-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RoleUserComponent } from './modules/role-user/role-user.component';
import { AreaEditComponent } from './modules/area/area-edit.component';
import { EditPageState } from './shared/enum/edit-page-state';
import { BranchEditComponent } from './modules/branch/branch-edit.component';
import { BranchListComponent } from './modules/branch/branch-list.component';
import { UserEditComponent } from './modules/user/user-edit.component';
import { UserListComponent } from './modules/user/user-list.component';
import { CustomerListComponent } from './modules/customer/customer-list.component';
import { CustomerEditComponent } from './modules/customer/customer-edit.component';
import { ProductTypeEditComponent } from './modules/product-type/product-type-edit.component';
import { ProductTypeListComponent } from './modules/product-type/product-type-list.component';
import { SupplierListComponent } from './modules/supplier/supplier-list.component';
import { SupplierEditComponent } from './modules/supplier/supplier-edit.component';
import { AuthGuard } from './core/guards/auth-guards.service';
import { AppComponent } from './app.component';
import { WarehouseListComponent } from './modules/warehouse/warehouse-list.component';
import { WarehouseEditComponent } from './modules/warehouse/warehouse-edit.component';
import { InvoiceListComponent } from './modules/invoice/invoice-list.component';
import { InvoiceEditComponent } from './modules/invoice/invoice-edit.component';
import { ProductListComponent } from './modules/products/product-list.component';
import { ProductEditComponent } from './modules/products/product-edit.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { DocImportListComponent } from './modules/doc-imp-product/doc-imp-product-list.component';
import { DocImportEditComponent } from './modules/doc-imp-product/doc-imp-product-edit.component';
import { ImportProductListComponent } from './modules/import-products/import-product-list.component';
import { ImportProductEditComponent } from './modules/import-products/import-product-edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: 'app',
          component: AppComponent,
          children: [
            {path: '',
            children: [
            {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
            {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
          
            { path: 'area', component: AreaListComponent, canActivate: [AuthGuard]},
            { path: 'area-add', component: AreaEditComponent, data: {editPageState: EditPageState.add}, canActivate: [AuthGuard]},
            { path: 'area-edit', component: AreaEditComponent, data: {editPageState: EditPageState.edit}, canActivate: [AuthGuard]},
            { path: 'area-view', component: AreaEditComponent, data: {editPageState: EditPageState.view}, canActivate: [AuthGuard]},
            
            { path: 'branch', component: BranchListComponent,canActivate: [AuthGuard]},
            { path: 'branch-add', component: BranchEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'branch-edit', component: BranchEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'branch-view', component: BranchEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},

            { path: 'doc-imp-product', component: DocImportListComponent,canActivate: [AuthGuard]},
            { path: 'doc-imp-product-add', component: DocImportEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'doc-imp-product-edit', component: DocImportEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'doc-imp-product-view', component: DocImportEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},

            { path: 'role-user', component: RoleUserComponent,canActivate: [AuthGuard]},
          
            { path: 'customer', component: CustomerListComponent,canActivate: [AuthGuard]},
            { path: 'customer-add', component: CustomerEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'customer-edit', component: CustomerEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'customer-view', component: CustomerEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},
          
            { path: 'user', component: UserListComponent,canActivate: [AuthGuard]},
            { path: 'user-add', component: UserEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'user-edit', component: UserEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'user-view', component: UserEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},
          
            { path: 'supplier', component: SupplierListComponent,canActivate: [AuthGuard]},
            { path: 'supplier-add', component: SupplierEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'supplier-edit', component: SupplierEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'supplier-view', component: SupplierEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},
          
            { path: 'product-type', component: ProductTypeListComponent,canActivate: [AuthGuard]},
            { path: 'product-type-add', component: ProductTypeEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'product-type-edit', component: ProductTypeEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'product-type-view', component: ProductTypeEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},
          
            { path: 'warehouse', component: WarehouseListComponent,canActivate: [AuthGuard]},
            { path: 'warehouse-add', component: WarehouseEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'warehouse-edit', component: WarehouseEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'warehouse-view', component: WarehouseEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},

            { path: 'invoice', component: InvoiceListComponent,canActivate: [AuthGuard]},
            { path: 'invoice-add', component: InvoiceEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'invoice-edit', component: InvoiceEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'invoice-view', component: InvoiceEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},

            { path: 'products', component: ProductListComponent,canActivate: [AuthGuard]},
            { path: 'products-add', component: ProductEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'products-edit', component: ProductEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'products-view', component: ProductEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},

            { path: 'import-products', component: ImportProductListComponent,canActivate: [AuthGuard]},
            { path: 'import-products-add', component: ImportProductEditComponent, data: {editPageState: EditPageState.add},canActivate: [AuthGuard]},
            { path: 'import-products-edit', component: ImportProductEditComponent, data: {editPageState: EditPageState.edit},canActivate: [AuthGuard]},
            { path: 'import-products-view', component: ImportProductEditComponent, data: {editPageState: EditPageState.view},canActivate: [AuthGuard]},

            { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},

          ]}
          ]
      }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
