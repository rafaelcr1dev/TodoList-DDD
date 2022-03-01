import { RequiredFieldValidation } from '@/frontend/validation/validators/required-field/required-field-validation'

describe('RequiredFieldValidation Smoke Tests', () => {
  test('Should be exists RequiredFieldValidation', () => {
    expect(RequiredFieldValidation).toBeDefined()
  })

  test('Should be exists call validate of RequiredFieldValidation', () => {
    expect(new RequiredFieldValidation().validate).toBeDefined()
  })
})
