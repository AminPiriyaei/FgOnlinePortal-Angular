import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginPaymentComponent } from './login-payment/login-payment.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'registerpayment', component: RegisterPaymentComponent},
  {path: 'loginpayment', component: LoginPaymentComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'**',redirectTo:'notfound'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
