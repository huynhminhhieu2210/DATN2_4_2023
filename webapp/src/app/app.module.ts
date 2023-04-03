import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavBarComponent } from './shared/header/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { CarouselCategoriesComponent } from './shared/header/carousel-categories.component';
import { IndexComponent } from './shared/header/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselCategoriesComponent,
    NavBarComponent,
    FooterComponent,
    DateFormatPipe,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
