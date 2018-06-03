import { ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {

  static passedDateRequired(control: AbstractControl): ValidationErrors | null {
    if (Date.parse(control.value) < Date.now()) {
      return null;
    }

    return {
      passedDateRequired: true
    };
  }

  static atLeastOne(group: FormGroup): ValidationErrors | null {

    // tslint:disable-next-line:forin
    for (const key in group.value) {
      console.log(key, group.value[key]);
      if (group.value[key]) { return; }
    }

    return { atLeastOne: true };
  }
}
