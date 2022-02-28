import { AddTodoProtocol } from 'frontend/domain/usecases/todo/add-todo-protocol'
import {
  AddTodoRepository,
  GenerateIdRepository
} from '../../protocols/cache/todo'

export class AddTodo implements AddTodoProtocol {
  constructor(
    private readonly addTodoRepository: AddTodoRepository,
    private readonly generateIdRepository: GenerateIdRepository
  ) {}

  async add(params: AddTodoProtocol.Params): Promise<AddTodoProtocol.Result> {
    const id = await this.generateIdRepository.generate()
    const todo = await this.addTodoRepository.add({
      ...params,
      todoId: id
    })

    if (todo) return todo

    return null
  }
}
