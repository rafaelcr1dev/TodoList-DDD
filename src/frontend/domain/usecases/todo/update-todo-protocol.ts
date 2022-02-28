import { AddTodoModel } from 'frontend/domain/models/add-todo-model'

export interface UpdateTodoProtocol {
  update: (params: UpdateTodoProtocol.Params) => Promise<AddTodoModel>
}

export namespace UpdateTodoProtocol {
  export type Result = AddTodoModel
  export type Params = {
    todoId: string
    todoName: string
    todoActive: boolean
  }
}
