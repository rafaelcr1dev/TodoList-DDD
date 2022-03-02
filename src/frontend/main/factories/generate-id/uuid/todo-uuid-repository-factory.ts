import { TodoUUIDRepository } from '../../../../infra/generate-id/uuid'

export const makeTodoUUIDRepositoryFactory = (): TodoUUIDRepository => {
  return new TodoUUIDRepository()
}
