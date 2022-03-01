import { AddTodoRepository } from '@/frontend/data/protocols/cache/todo'

export class AddTodoRepositorySpy implements AddTodoRepository {
  nonce: number = 0
  params: AddTodoRepository.Params
  result: AddTodoRepository.Result = {
    todoId: 'valid-id',
    todoName: 'any name',
    todoActive: true
  }

  async add(
    params: AddTodoRepository.Params
  ): Promise<AddTodoRepository.Result> {
    this.nonce = this.nonce + 1
    this.params = params

    if (this.result) {
      return {
        ...this.result,
        todoId: params.todoId
      }
    }

    return null
  }
}
