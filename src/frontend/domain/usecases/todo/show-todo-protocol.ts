import { LoadTodoModel } from 'frontend/domain/models/load-todo-model'

export interface ShowTodoProtocol {
  show: (todoId: string) => Promise<ShowTodoProtocol.Result>
}

export namespace ShowTodoProtocol {
  export type Result = LoadTodoModel
}
