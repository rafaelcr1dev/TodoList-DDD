import faker from '@faker-js/faker'
import { ValidationBuilder } from '@/frontend/validation/validators/builder/validation-builder'

describe('ValidationBuilder Smoke Tests', () => {
  test('Should be exists ValidationBuilder', () => {
    expect(ValidationBuilder).toBeDefined()
  })

  test('Should be exists call field of ValidationBuilder', () => {
    expect(ValidationBuilder.field).toBeDefined()
  })

  test('Should be exists call required of ValidationBuilder', () => {
    expect(
      ValidationBuilder.field(faker.database.column()).required
    ).toBeDefined()
  })
})
