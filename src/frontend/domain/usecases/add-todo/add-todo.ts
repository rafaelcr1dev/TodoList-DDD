import { AddTodoModel } from '../../models/add-todo-model'

export interface AddTodo {
  add: (todoName: string) => Promise<AddTodoModel>
}
