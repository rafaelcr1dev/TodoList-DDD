import { NotFoundResultsError } from '@/frontend/domain/errors'
import { LoadTodoProtocol } from '@/frontend/domain/usecases'

export class LoadTodos implements LoadTodoProtocol {
  constructor(private readonly loadTodosRepository: any) {}

  async load(): Promise<LoadTodoProtocol.Result[]> {
    const todos = await this.loadTodosRepository.load()

    if (todos.length) return todos

    throw new NotFoundResultsError()
  }
}
