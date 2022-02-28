import { AddTodoRepository } from '@/frontend/data/protocols/cache/todo'
import { v4 as uuidv4 } from 'uuid'

export class AddTodoRepositorySpy implements AddTodoRepository {
  params: AddTodoRepository.Params
  result: AddTodoRepository.Result

  async add(
    params: AddTodoRepository.Params
  ): Promise<AddTodoRepository.Result> {
    this.params = params
    this.result = {
      todoId: uuidv4(),
      todoName: params.todoName
    }

    return this.result
  }
}
