import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './app/core/guards/auth-guards.service';
import { AppComponent } from './app/app.component';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { DashboardComponent } from './app/modules/dashboard/dashboard.component';
import { AppModule } from './app/app.module';
import { AccountModule } from './account/account.module';
export function tokenGetter(){
  return sessionStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppModule,
    AccountModule,
    RootRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [RootComponent]
})
export class RootModule { }
