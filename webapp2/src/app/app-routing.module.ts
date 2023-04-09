import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageState } from './shared/enum/edit-page-state';
import { AuthGuard } from './core/guards/auth-guards.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/dashboard/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: 'app',
          component: AppComponent,
          children: [
            {path: '',
            children: [
            {path: '', component: HomeComponent, canActivate: [AuthGuard]},
            {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
          ]}
          ]
      }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
