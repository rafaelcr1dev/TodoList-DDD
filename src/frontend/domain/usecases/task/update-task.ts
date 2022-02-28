import { AddTaskModel } from 'frontend/domain/models/add-task-model'
import { LoadTaskModel } from 'frontend/domain/models/load-task-model'

export interface UpdateTask {
  show: (taskId: string, TodoId: string) => Promise<LoadTaskModel>

  update: (
    TaskId: string,
    TaskName: string,
    TaskActive: boolean
  ) => Promise<AddTaskModel>

  toggleDone: (taskId: string, TodoId: string) => Promise<LoadTaskModel>
}
