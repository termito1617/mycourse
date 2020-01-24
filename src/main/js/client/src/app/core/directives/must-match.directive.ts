import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appMustMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MustMatchDirective,
    multi: true
  }]
})
export class MustMatchDirective implements Validator {

  @Input('appMustMatch')
  mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    const control = formGroup.controls[this.mustMatch[0]];
    const matchingControl = formGroup.controls[this.mustMatch[1]];

    if (!control || !matchingControl) {
      return null;
    }

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
