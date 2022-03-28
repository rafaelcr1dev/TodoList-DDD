import { LoadTodoProtocol } from '@/frontend/domain/usecases'

export class LoadTodos implements LoadTodoProtocol {
  constructor(private readonly loadTodosRepository: any) {}

  async load(): Promise<LoadTodoProtocol.Result[]> {
    await this.loadTodosRepository.load()

    return []
  }
}
