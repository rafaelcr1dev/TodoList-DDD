import { AddTodoModel } from 'frontend/domain/models/add-todo-model'
import { LoadTodoModel } from 'frontend/domain/models/load-todo-model'

export interface UpdateTodo {
  show: (todoId: string) => Promise<LoadTodoModel>

  update: (
    todoId: string,
    todoName: string,
    todoActive: boolean
  ) => Promise<AddTodoModel>
}
