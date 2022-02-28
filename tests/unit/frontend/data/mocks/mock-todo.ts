import faker from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

import { AddTodoRepository } from '@/frontend/data/protocols/cache/todo'

export class AddTodoRepositorySpy implements AddTodoRepository {
  nonce: number = 0
  params: AddTodoRepository.Params
  result: AddTodoRepository.Result = {
    todoId: uuidv4(),
    todoName: faker.name.findName()
  }

  async add(
    params: AddTodoRepository.Params
  ): Promise<AddTodoRepository.Result> {
    this.nonce = this.nonce + 1
    this.params = params

    return this.result
  }
}
