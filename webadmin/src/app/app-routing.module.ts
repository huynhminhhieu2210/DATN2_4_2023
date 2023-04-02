import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'area', component: AreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
