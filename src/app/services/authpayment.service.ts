import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaymentRegisterViewModel } from '../DTOs/Account-Payment/PaymentRegisterViewModel';
import { PaymentLoginViewModel } from 'src/app/DTOs/Account-Payment/PaymentLoginViewModel';
import { IPaymentLoginUser } from '../DTOs/Account-Payment/IPaymentLoginUser';
import { IResponseResult } from '../DTOs/Common/IResponseResult';
import { Category } from '../DTOs/Account-Payment/Category';

@Injectable({
  providedIn: 'root'
})
export class AuthpaymentService {

  constructor(
    private http: HttpClient

  ) {


  }




  loginPaymentUser(PaymentLoginViewModel: PaymentLoginViewModel): Observable<IPaymentLoginUser> {
    return this.http.post<IPaymentLoginUser>('/paymentgateway/paymentregister', PaymentLoginViewModel);
  }


  registerPaymentUser(registerPaymentData: PaymentRegisterViewModel): Observable<any> {
    return this.http.post<any>('/paymentgateway/paymentlogin', registerPaymentData);

}
getPaymentActiveCategories(): Observable<IResponseResult<Category[]>> {
  return this.http.get<IResponseResult<Category[]>>('/paymentgateway/payment-active-categories');
}

}
