import { LoginPaymentComponent } from './pages/login-payment/login-payment.component';
import { AuthpaymentService } from './services/authpayment.service';
import { FgInterceptor } from './Utilities/FgInterceptor';
import { AppRoutingModule } from './pages/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterPaymentComponent } from './pages/register-payment/register-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    RegisterPaymentComponent,
    LoginPaymentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthpaymentService,
    {
      provide:HTTP_INTERCEPTORS,
       useClass:FgInterceptor,
       multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
