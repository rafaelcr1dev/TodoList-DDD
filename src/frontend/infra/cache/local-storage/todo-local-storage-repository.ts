import { AddTodoRepository } from '@/frontend/data/protocols/cache/todo'

export class TodoLocalStorageRepository implements AddTodoRepository {
  async add(
    params: AddTodoRepository.Params
  ): Promise<AddTodoRepository.Result> {
    return Promise.resolve(params)
  }
}
