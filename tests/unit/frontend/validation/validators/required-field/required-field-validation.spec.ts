import { RequiredFieldValidation } from '@/frontend/validation/validators/required-field/required-field-validation'
const makeSut = (field: string): RequiredFieldValidation =>
  new RequiredFieldValidation(field)

describe('RequiredFieldValidation Smoke Tests', () => {
  test('Should be exists RequiredFieldValidation', () => {
    expect(RequiredFieldValidation).toBeDefined()
  })

  test('Should be exists call validate of RequiredFieldValidation', () => {
    const sut = makeSut('name')
    expect(sut.validate).toBeDefined()
  })
})

describe('RequiredField Validation', () => {
  test('Should call RequiredFieldValidation with correct values', () => {
    const sut = makeSut('name')
    const validateSpy = jest.spyOn(sut, 'validate')

    const input = {
      name: 'Any Name Todo'
    }

    sut.validate(input)
    expect(validateSpy).toHaveBeenCalledWith(input)
  })
})
