import { AddTodoProtocol } from 'frontend/domain/usecases/todo/add-todo-protocol'
import {
  AddTodoRepository,
  GenerateIdRepository,
  ValidateIdRepository
} from '../../protocols/cache/todo'

export class AddTodo implements AddTodoProtocol {
  constructor(
    private readonly addTodoRepository: AddTodoRepository,
    private readonly generateIdRepository: GenerateIdRepository,
    private readonly validateIdRepository: ValidateIdRepository
  ) {}

  async add(params: AddTodoProtocol.Params): Promise<AddTodoProtocol.Result> {
    const id = await this.generateIdRepository.generate()
    const isValidId = await this.validateIdRepository.validate(id)

    if (isValidId) {
      const todo = await this.addTodoRepository.add({
        ...params,
        todoId: id
      })

      if (todo) return todo
    }

    return null
  }
}
