import { AddTodoModel } from 'frontend/domain/models/add-todo-model'

export interface AddTodoProtocol {
  add: (params: AddTodoProtocol.Params) => Promise<AddTodoProtocol.Result>
}

export namespace AddTodoProtocol {
  export type Params = {
    todoName: string
  }

  export type Result = AddTodoModel
}
