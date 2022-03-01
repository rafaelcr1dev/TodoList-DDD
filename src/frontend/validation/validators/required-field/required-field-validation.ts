import { FieldValidation } from '../../protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  field: string
  validate(): any {}
}
