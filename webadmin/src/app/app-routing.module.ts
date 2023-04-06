import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './modules/area/area-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ColorComponent } from './modules/color/color.component';
import { DocImpProductComponent } from './modules/doc-imp-product/doc-imp-product.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { ProductsComponent } from './modules/products/products.component';
import { RoleUserComponent } from './modules/role-user/role-user.component';
import { WarehouseComponent } from './modules/warehouse/warehouse.component';
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
          
            { path: 'area', component: AreaListComponent ,canActivate: [AuthGuard]},
            { path: 'area-add', component: AreaEditComponent,canActivate: [AuthGuard]},
            { path: 'area-edit', component: AreaEditComponent,canActivate: [AuthGuard]},
            { path: 'area-view', component: AreaEditComponent,canActivate: [AuthGuard]},
            
            { path: 'branch', component: BranchListComponent,canActivate: [AuthGuard]},
            { path: 'branch-add', component: BranchEditComponent,canActivate: [AuthGuard]},
            { path: 'branch-edit', component: BranchEditComponent,canActivate: [AuthGuard]},
            { path: 'branch-view', component: BranchEditComponent,canActivate: [AuthGuard]},
            
            { path: 'color', component: ColorComponent,canActivate: [AuthGuard]},
            { path: 'doc-imp-product', component: DocImpProductComponent,canActivate: [AuthGuard]},
            { path: 'invoice', component: InvoiceComponent,canActivate: [AuthGuard]},
            { path: 'products', component: ProductsComponent,canActivate: [AuthGuard]},
            { path: 'role-user', component: RoleUserComponent,canActivate: [AuthGuard]},
          
            { path: 'customer', component: CustomerListComponent,canActivate: [AuthGuard]},
            { path: 'customer-add', component: CustomerEditComponent,canActivate: [AuthGuard]},
            { path: 'customer-edit', component: CustomerEditComponent,canActivate: [AuthGuard]},
            { path: 'customer-view', component: CustomerEditComponent,canActivate: [AuthGuard]},
          
            { path: 'user', component: UserListComponent,canActivate: [AuthGuard]},
            { path: 'user-add', component: UserEditComponent,canActivate: [AuthGuard]},
            { path: 'user-edit', component: UserEditComponent,canActivate: [AuthGuard]},
            { path: 'user-view', component: UserEditComponent,canActivate: [AuthGuard]},
          
            { path: 'supplier', component: SupplierListComponent,canActivate: [AuthGuard]},
            { path: 'supplier-add', component: SupplierEditComponent,canActivate: [AuthGuard]},
            { path: 'supplier-edit', component: SupplierEditComponent,canActivate: [AuthGuard]},
            { path: 'supplier-view', component: SupplierEditComponent,canActivate: [AuthGuard]},
          
            { path: 'product-type', component: ProductTypeListComponent,canActivate: [AuthGuard]},
            { path: 'product-type-add', component: ProductTypeEditComponent,canActivate: [AuthGuard]},
            { path: 'product-type-edit', component: ProductTypeEditComponent,canActivate: [AuthGuard]},
            { path: 'product-type-view', component: ProductTypeEditComponent,canActivate: [AuthGuard]},
          
            { path: 'warehouse', component: WarehouseComponent,canActivate: [AuthGuard]},
          ]}
          ]
      }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
