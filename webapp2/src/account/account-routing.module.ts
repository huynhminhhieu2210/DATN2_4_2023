import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'account',
        component: AccountComponent,
        children: [
          {path: 'login', component: LoginComponent},
        ]
    }
  ])
],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
