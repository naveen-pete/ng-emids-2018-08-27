import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AppValidators } from '../app-validators';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  showMessage = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [Validators.required, Validators.minLength(3), AppValidators.cannotContainSpace],
        AppValidators.shouldBeUnique
      ),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log('Customer form submitted');
    console.log(this.form);
    console.log(this.form.value);
    this.form.reset();
  }

  get name() {
    return this.form.get('name');
  }

  get phone() {
    return this.form.get('phone');
  }

  get email() {
    return this.form.get('email');
  }

  get city() {
    return this.form.get('city');
  }
}
