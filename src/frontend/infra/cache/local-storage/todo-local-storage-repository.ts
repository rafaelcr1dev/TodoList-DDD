import { AddTodoRepository } from '../../../data/protocols/cache/todo'

export class TodoLocalStorageRepository implements AddTodoRepository {
  async add(
    params: AddTodoRepository.Params
  ): Promise<AddTodoRepository.Result> {
    const todoNew = {
      ...params,
      todoActive: true
    }

    const storageTodos = localStorage.getItem('todos')

    const todos: AddTodoRepository.Result[] | null = storageTodos
      ? JSON.parse(storageTodos)
      : []

    const todoList: AddTodoRepository.Result[] =
      todos && typeof todoNew === 'object' ? todos : []

    todoList.push(todoNew)

    localStorage.setItem('todos', JSON.stringify(todoList))

    return Promise.resolve(todoNew)
  }
}
