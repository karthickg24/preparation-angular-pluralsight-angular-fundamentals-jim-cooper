// tslint:disable directive-selector
import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[ValidateLocationOnlineUrl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateLocationOnlineurlDirective,
      multi: true
    }
  ]
})
export class ValidateLocationOnlineurlDirective implements Validator {

  constructor() { }
  validate(formGroup: FormGroup): {[key: string]: any} {
    console.log('--inside--')
     const addressControl = formGroup.controls['address'];
     const cityControl = formGroup.controls['city'];
     const countryControl = formGroup.controls['country'];
     const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

     if ((addressControl && addressControl.value && cityControl && cityControl.value &&
      countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
        console.log(null)
        return null;
      } else {
        console.log('errors in validatio');
        return { ValidateLocationOnlineUrl: false};
      }

  }
}
