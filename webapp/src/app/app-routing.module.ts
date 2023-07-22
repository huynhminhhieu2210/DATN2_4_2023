import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageState } from './shared/enum/edit-page-state';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { ProductsComponent } from './modules/products/products.component';
import { CartComponent } from './modules/cart/cart.component';
import { AuthGuard } from './core/guards/auth-guards.service';
import { ProfileComponent } from './modules/profile/profile.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { InvoiceDetailComponent } from './modules/invoice-detail/invoice-detail.component';
import { SearchComponent } from './modules/search/search.component';
import { ProductsNCCComponent } from './modules/products-ncc/products-ncc.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products-ncc', component: ProductsNCCComponent},
  {path: 'search', component: SearchComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent,canActivate: [AuthGuard]},
  //{path: 'cart', component: CartComponent},
  {path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent,canActivate: [AuthGuard]},
  {path: 'invoice-detail', component: InvoiceDetailComponent,canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
