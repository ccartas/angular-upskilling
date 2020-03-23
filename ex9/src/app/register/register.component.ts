import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      first_name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      last_name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      }),
      confirm_password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      }),
      position: new FormControl('Position', {

      }),
      agreement: new FormControl(false, {
        validators: [
          Validators.requiredTrue
        ]
      })
    }, {
      validators: [
        this.validatePasswordMatch
      ]
    });
  }

  ngOnInit(): void {
  
  }
  onFormSubmitted(event) {
    //console.log('Form', this.registerForm);
    //console.log('Invalid Form State', this.registerForm.invalid);
    //console.log(this.registerForm.get('agreement').invalid);
    const invalidFormControls = this.validateFormGroup(this.registerForm);
    if(invalidFormControls.length && this.registerForm.invalid) {
      console.log(invalidFormControls);
    }
  }

  validatePasswordMatch(control: AbstractControl) {
    if(control.get('password').value !== control.get('confirm_password').value) {
      //return [{ passwordsNotMatching: true }];
      return { invalid: true };
    }
    return null;
  }

  validateFormGroup(formGroup: FormGroup) {
    const invalidFields = Object.entries(formGroup.controls).filter(formControlPair => formControlPair[1].invalid);
    return invalidFields;
  }
}
