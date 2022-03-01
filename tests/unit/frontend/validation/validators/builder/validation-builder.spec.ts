import { ValidationBuilder } from '@/frontend/validation/validators/builder/validation-builder'

describe('ValidationBuilder Smoke Tests', () => {
  test('Should be exists ValidationBuilder', () => {
    expect(ValidationBuilder).toBeDefined()
  })

  test('Should be exists call field of ValidationBuilder', () => {
    expect(ValidationBuilder.field).toBeDefined()
  })
})
