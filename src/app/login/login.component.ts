import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  formValues: any
  submitting = false
  hasError = false
  errorMsg: string
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormControls()
    this.createForm
  }

  createFormControls() {
    this.formValues = {
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      passwordConfirmation: ['', Validators.compose([Validators.required])]
    }
  }

  createForm() {
    this.form = this.fb.group(this.formValues)
  }

  get f() {
    if (this.form && this.form.controls) {
      return this.form.controls
    }
  }

  submitForm() {
    debugger
    this.hasError = false
    this.submitting = true
    if (this.form.invalid) {
      this.hasError = true
      this.submitting = false
      return
    }
  }

  cancelForm() {
    this.form.reset()
  }

  ngOnDestroy(): void {

  }

}
