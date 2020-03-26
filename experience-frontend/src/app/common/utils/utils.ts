import { FormGroup } from '@angular/forms';

export const validateFormGroup = (formGroup: FormGroup) => {
    const invalidFields = Object.entries(formGroup.controls).filter(formControlPair => formControlPair[1].invalid);
    return invalidFields;
}