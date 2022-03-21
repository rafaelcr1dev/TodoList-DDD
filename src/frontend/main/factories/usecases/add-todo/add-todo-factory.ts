import { makeTodoLocalStorageRepositoryFactory } from '../../../../main/factories/cache/local-storage/todo-local-storage-repository-factory'
import { AddTodo } from '../../../../data/usecases/todo'
import { makeTodoUUIDRepositoryFactory } from '../../../../main/factories/generate-id/uuid/todo-uuid-repository-factory'

export const makeAddTodoFactory = (): AddTodo => {
  return new AddTodo(
    makeTodoLocalStorageRepositoryFactory(),
    makeTodoUUIDRepositoryFactory()
  )
}
