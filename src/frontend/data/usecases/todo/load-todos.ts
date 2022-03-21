import { LoadTodoProtocol } from '@/frontend/domain/usecases'

export class LoadTodos implements LoadTodoProtocol {
  async load(): Promise<LoadTodoProtocol.Result[]> {
    return []
  }
}
