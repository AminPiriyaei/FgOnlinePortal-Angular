import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentLoginViewModel } from 'src/app/DTOs/Account-Payment/PaymentLoginViewModel';
import {AuthpaymentService} from '../../services/authpayment.service';

@Component({
  selector: 'app-login-payment',
  templateUrl: './login-payment.component.html',
  styleUrls: ['./login-payment.component.scss']
})
export class LoginPaymentComponent implements OnInit {

  public loginPaymentForm!: FormGroup;

  constructor(
    private authpaymentService: AuthpaymentService

  ) {

  }

  ngOnInit(): void {
    this.loginPaymentForm = new FormGroup({
        AddressWebsite: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ])
    });
  }
  submitPaymentLoginForm() {
    if (this.loginPaymentForm.valid) {
      const loginPaymentData = new PaymentLoginViewModel(
        this.loginPaymentForm.controls.AddressWebsite.value
      );
    }
  }

}
