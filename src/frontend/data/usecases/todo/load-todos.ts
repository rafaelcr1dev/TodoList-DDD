import { NotFoundResultsError } from '@/frontend/domain/errors'
import { LoadTodoProtocol } from '@/frontend/domain/usecases'

export class LoadTodos implements LoadTodoProtocol {
  constructor(private readonly todosRepository: any) {}

  async load(): Promise<LoadTodoProtocol.Result[]> {
    const todos = await this.todosRepository.load()

    if (todos.length) return todos

    throw new NotFoundResultsError()
  }
}
