import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/modules/login/login.component';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/modules/dashboard/dashboard.component';
import { AuthGuard } from './app/core/guards/auth-guards.service';
const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
