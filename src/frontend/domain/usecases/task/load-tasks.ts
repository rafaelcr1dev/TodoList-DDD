import { LoadTaskModel } from 'frontend/domain/models/load-task-model'

export interface LoadTasks {
  load: (taskId: string, todoId: string) => Promise<LoadTaskModel>
}
