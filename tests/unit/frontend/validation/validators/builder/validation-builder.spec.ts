import faker from '@faker-js/faker'
import { ValidationBuilder as sut } from '@/frontend/validation/validators/builder/validation-builder'
import { RequiredFieldValidation } from '@/frontend/validation/validators/required-field/required-field-validation'

describe('ValidationBuilder Smoke Tests', () => {
  test('Should be exists ValidationBuilder', () => {
    expect(sut).toBeDefined()
  })

  test('Should be exists call field of ValidationBuilder', () => {
    expect(sut.field).toBeDefined()
  })

  test('Should be exists call required of ValidationBuilder', () => {
    expect(sut.field(faker.database.column()).required).toBeDefined()
  })
})

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })
})
