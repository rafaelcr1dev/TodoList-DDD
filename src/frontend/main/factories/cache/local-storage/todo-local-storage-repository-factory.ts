import { AddTodoRepository } from '../../../../data/protocols/cache/todo'
import { TodoLocalStorageRepository } from '../../../../infra/cache/local-storage/todo-local-storage-repository'

export const makeTodoLocalStorageRepositoryFactory = (): AddTodoRepository => {
  return new TodoLocalStorageRepository()
}
