import { AddTodoRepository } from '@/frontend/data/protocols/cache/todo'

export class TodoLocalStorageRepository implements AddTodoRepository {
  async add(
    params: AddTodoRepository.Params
  ): Promise<AddTodoRepository.Result> {
    const todoNew = {
      ...params,
      todoActive: true
    }

    const todos: AddTodoRepository.Result[] | null = JSON.parse(
      localStorage.getItem('todos')
    )

    const todoList: AddTodoRepository.Result[] =
      todos && typeof todoNew === 'object' ? todos : []
    todoList.push(todoNew)

    localStorage.setItem('todos', JSON.stringify(todoList))

    return Promise.resolve(todoNew)
  }
}
