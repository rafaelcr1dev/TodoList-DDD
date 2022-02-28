import { AddTodoModel } from 'frontend/domain/models/add-todo-model'

export interface AddTodo {
  add: (todoName: string) => Promise<AddTodoModel>
}
