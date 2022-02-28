import { AddTodoProtocol } from 'frontend/domain/usecases/todo/add-todo-protocol'
import { AddTodoRepository } from '../../protocols/cache/todo'

export class AddTodo implements AddTodoProtocol {
  constructor(private readonly addTodoRepository: AddTodoRepository) {}

  async add(params: AddTodoProtocol.Params): Promise<AddTodoProtocol.Result> {
    const todo = await this.addTodoRepository.add(params)

    if (todo) return todo

    return null
  }
}
