import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('fname', Validators.required),
      lastName: new FormControl('lname', Validators.required),
      address: new FormControl('address', Validators.required),
      city: new FormControl('city', Validators.required),
      postalcode: new FormControl('postalcode', Validators.required),
      country: new FormControl('country', Validators.required),
      paymentmethod: new FormControl('paymentmethod', Validators.required),
      creditcardnum: new FormControl('creditcardnum', Validators.required),
      expiry: new FormControl('expiry', Validators.required),
      cvc: new FormControl('cvc', [Validators.required, Validators.pattern("^[0-9]{1,4}$")]),
      nameoncard: new FormControl('nameoncard', Validators.required)

    
    })
  }
  submit(){
    const values = this.form.value;
  }

}
