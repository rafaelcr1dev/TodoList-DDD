import { FieldValidation } from '../../protocols/field-validation'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validators: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): any {}
}
