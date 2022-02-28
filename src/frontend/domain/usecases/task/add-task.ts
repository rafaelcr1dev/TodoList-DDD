import { AddTaskModel } from 'frontend/domain/models/add-task-model'

export interface AddTask {
  add: (
    taskName: string,
    taskId: string,
    todoId: string
  ) => Promise<AddTaskModel>
}
