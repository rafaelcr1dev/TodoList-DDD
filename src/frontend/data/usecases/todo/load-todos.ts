import { NotFoundResultsError } from '@/frontend/domain/errors'
import { LoadTodoProtocol } from '@/frontend/domain/usecases'

export class LoadTodos implements LoadTodoProtocol {
  constructor(private readonly todosRepository: LoadTodoProtocol) {}

  async load(): Promise<LoadTodoProtocol.Result[]> {
    const todos: LoadTodoProtocol.Result[] = await this.todosRepository.load()

    if (todos.length) return todos

    throw new NotFoundResultsError()
  }
}
