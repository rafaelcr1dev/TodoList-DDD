import { AddTodoProtocol } from 'frontend/domain/usecases/todo/add-todo-protocol'

class AddTodo implements AddTodoProtocol {
  async add(params: AddTodoProtocol.Params): Promise<AddTodoProtocol.Result> {
    return new Promise(() => ({
      todoId: '123',
      todoName: 'any-name'
    }))
  }
}

const makeSut = (): any => {
  const sut = new AddTodo()

  return {
    sut
  }
}

describe('AddTodo Smoke test UseCases', () => {
  test('Should be exists a AddTodo class', () => {
    expect(AddTodo).toBeDefined()
  })

  test('Should be exists a add method on AddTodo class', () => {
    expect(new AddTodo().add).toBeDefined()
  })
})

describe('AddTodo UseCases ', () => {
  test('Should call add with correct params', () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')
    sut.add({ todoName: 'Any Name' })
    expect(addSpy).toHaveBeenCalledWith({ todoName: 'Any Name' })
  })
})
