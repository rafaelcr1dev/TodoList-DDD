import { RequiredFieldError } from '@/frontend/validation/errors'
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

describe('RequiredFieldValidation', () => {
  test('Should call RequiredFieldValidation with correct values', () => {
    const sut = makeSut('name')
    const validateSpy = jest.spyOn(sut, 'validate')

    const input = {
      name: 'Any Name Todo'
    }

    sut.validate(input)
    expect(validateSpy).toHaveBeenCalledWith(input)
  })

  test('Should return error if field is empty', () => {
    const field = 'name'
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })

    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const field = 'name'
    const sut = makeSut(field)
    const resultValidate = sut.validate({ [field]: 'Any thing' })

    expect(resultValidate).toBeFalsy()
  })
})
