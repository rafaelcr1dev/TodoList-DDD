import { LoadTodoModel } from 'frontend/domain/models/load-todo-model'

export interface LoadTodo {
  load: () => Promise<LoadTodoModel>
}
