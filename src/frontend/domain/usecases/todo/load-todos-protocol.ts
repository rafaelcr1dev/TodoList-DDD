import { LoadTodoModel } from 'frontend/domain/models/load-todo-model'

export interface LoadTodoProtocol {
  load: () => Promise<LoadTodoProtocol.Result>
}

export namespace LoadTodoProtocol {
  export type Result = LoadTodoModel
}
