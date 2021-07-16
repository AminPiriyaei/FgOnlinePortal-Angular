import { Category } from './../../DTOs/Account-Payment/Category';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentRegisterViewModel } from 'src/app/DTOs/Account-Payment/PaymentRegisterViewModel';
import {AuthpaymentService} from '../../services/authpayment.service';
@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss'],

})
export class RegisterPaymentComponent implements OnInit {

  public registerPaymentForm!: FormGroup;
  categories:Category[]=[];
  selectedCategories: number[] = [];


  constructor(
    private authpaymentService: AuthpaymentService

  ) {

  }

  ngOnInit(): void {


    this.registerPaymentForm = new FormGroup({
      NameWebsite: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      Tell: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      BankAccount: new FormControl(null,
        [
          Validators.required
        ]),


        AddressWebsite: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ])
    });


    //****categories */

    this.authpaymentService.getPaymentActiveCategories().subscribe(res=>{

      if(res.status==='Success'){

        this.categories=res.data;
        console.log(this.categories);
      }


    });


  }

  public filterCategories(event:any)
  {
    const value = event.target.value;
    if(event.target.checked)
    {
      console.log('add', value);
      this.selectedCategories.push(parseInt(value, 0));

    }else{
      console.log('remove',value);
    }

    console.log(this.selectedCategories);

    //console.log(event);
  }
  //categories
  submitPaymentRegisterForm() {
    const registerPaymentData = new PaymentRegisterViewModel(
      this.registerPaymentForm?.controls.NameWebsite.value,
      this.registerPaymentForm?.controls.Tell.value,
      this.registerPaymentForm?.controls.BankAccount.value,
      this.registerPaymentForm?.controls.AddressWebsite.value
    );
    this.authpaymentService.registerPaymentUser(registerPaymentData).subscribe(res => {
      console.log(res);
      if (res.status === 'Success') {
        this.registerPaymentForm.reset();
      }
    });

    }
  }
