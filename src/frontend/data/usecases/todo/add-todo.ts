import { AddTodoProtocol } from 'frontend/domain/usecases/todo/add-todo-protocol'

export class AddTodo implements AddTodoProtocol {
  async add(params: AddTodoProtocol.Params): Promise<AddTodoProtocol.Result> {
    return new Promise(() => ({
      todoId: '123',
      todoName: 'any-name'
    }))
  }
}
