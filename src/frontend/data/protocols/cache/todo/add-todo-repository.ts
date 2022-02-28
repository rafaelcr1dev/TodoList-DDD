import { AddTodoModel } from 'frontend/domain/models/add-todo-model'

export interface AddTodoRepository {
  add: (params: AddTodoRepository.Params) => Promise<AddTodoRepository.Result>
}

export namespace AddTodoRepository {
  export type Params = {
    todoName: string
    todoId: string
  }

  export type Result = AddTodoModel
}
