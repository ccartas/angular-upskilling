import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormsModule, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = formBuilder.group({
      FIRST_NAME: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      LAST_NAME: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      EMAIL: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      PASSWORD: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      }),
      CONFIRM_PASSWORD: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ],
        updateOn: "blur"
      }),
      COMPANY_NAME: new FormControl('', {
        validators: [
          Validators.minLength(3)
        ]
      }),
      POSITION: new FormControl('Position', {
        validators: [
          Validators.minLength(3),
        ]
      }),
      AGREEMENT: new FormControl(false, {
        validators: [
          Validators.requiredTrue
        ]
      })
    }, {
      validators: this.validatePassword,
      updateOn: "submit"
    })
  }

  validatePassword(control: AbstractControl) {
    if(control.get('PASSWORD').value !== control.get('CONFIRM_PASSWORD').value) {
      return { invalid: true }
    }
    return null;
  }

  ngOnInit(): void {
  
  }

  validateForm(formGroup: FormGroup) {
    let invalidFields = Object.entries(formGroup.controls).filter(formControlPair => formControlPair[1].invalid);
    return invalidFields;
  }

  onRegisterSubmitted(event) {
    const invalidFields = this.validateForm(this.registerForm);
    if(invalidFields.length && this.registerForm.invalid) {
      console.log(invalidFields);
    }
    console.log(this.registerForm.get('AGREEMENT').value)
  }
}
