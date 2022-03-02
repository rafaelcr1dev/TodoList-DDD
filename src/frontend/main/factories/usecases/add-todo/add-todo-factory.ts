import { AddTodo } from '../../../../data/usecases/todo'
import { makeTodoLocalStorageRepositoryFactory } from '../../../factories/cache/local-storage/todo-local-storage-repository-factory'
import { makeTodoUUIDRepositoryFactory } from '../../../factories/generate-id/uuid/todo-uuid-repository-factory'

export const makeAddTodoFactory = (): AddTodo => {
  return new AddTodo(
    makeTodoLocalStorageRepositoryFactory(),
    makeTodoUUIDRepositoryFactory(),
    makeTodoUUIDRepositoryFactory()
  )
}
