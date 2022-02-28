import { AddTodoModel } from 'frontend/domain/models/add-todo-model'
import { LoadTodoModel } from 'frontend/domain/models/load-todo-model'

export interface UpdateTodo {
  show: (id: string) => Promise<LoadTodoModel>

  update: (
    id: string,
    todoName: string,
    todoActive: boolean
  ) => Promise<AddTodoModel>
}
