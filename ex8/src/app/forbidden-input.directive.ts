import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbiddenInput]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenInputDirective, multi: true }]
})
export class ForbiddenInputDirective implements Validator {
  
  @Input('appForbiddenInput') inputValue: string;

  forbiddenNameValidator(inputRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = inputRe.test(control.value);
      return forbidden ? {'inputValue': {value: control.value}} : null;
    };
  }

  validate(control: AbstractControl): ValidationErrors {
    return this.inputValue ? this.forbiddenNameValidator(new RegExp(this.inputValue, 'i'))(control) : null;
  }

 
  constructor() { }

}
