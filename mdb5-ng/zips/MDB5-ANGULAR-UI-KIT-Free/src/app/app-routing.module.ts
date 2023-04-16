import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageState } from './shared/enum/edit-page-state';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product-detail', component: ProductDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
