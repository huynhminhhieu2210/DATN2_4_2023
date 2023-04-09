import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavBarComponent } from './shared/header/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './core/guards/auth-guards.service';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './modules/dashboard/home.component';
import { CarouselCategoriesComponent } from './shared/header/carousel-categories.component';
import { IndexComponent } from './shared/header/index.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselCategoriesComponent,
    NavBarComponent,
    FooterComponent,
    DateFormatPipe,
    HomeComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
