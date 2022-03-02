import { ValidationComposite } from '../../../validation/validators'
import { ValidationBuilder as Builder } from '../../../validation/validators/builder/validation-builder'

export const makeTodoValidationFactory = (): ValidationComposite => {
  return ValidationComposite.build([
    ...Builder.field('name').required().build()
  ])
}
