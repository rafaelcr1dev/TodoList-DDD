export interface AddTodoRepository {
  add: (params: AddTodoRepository.Params) => Promise<AddTodoRepository.Result>
  load: () => Promise<AddTodoRepository.Result[]>
}

export namespace AddTodoRepository {
  export type Params = {
    todoName: string
    todoId: string
  }

  export type Result = {
    todoId: string
    todoName: string
    todoActive: boolean
  }
}
