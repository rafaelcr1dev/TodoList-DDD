import { InvalidIdError } from '@/frontend/domain/errors'
import { AddTodoProtocol } from 'frontend/domain/usecases/todo/add-todo-protocol'
import {
  AddTodoRepository,
  ManagerIdRepository
} from '../../protocols/cache/todo'

export class AddTodo implements AddTodoProtocol {
  constructor(
    private readonly addTodoRepository: AddTodoRepository,
    private readonly managerIdRepository: ManagerIdRepository
  ) {}

  async add(params: AddTodoProtocol.Params): Promise<AddTodoProtocol.Result> {
    const id = await this.managerIdRepository.generate()
    const isValidId = await this.managerIdRepository.validate(id)

    if (isValidId) {
      const todo = await this.addTodoRepository.add({
        ...params,
        todoId: id
      })

      if (todo) return todo
    }

    throw new InvalidIdError()
  }
}
