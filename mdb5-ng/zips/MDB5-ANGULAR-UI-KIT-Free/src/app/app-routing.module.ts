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
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
