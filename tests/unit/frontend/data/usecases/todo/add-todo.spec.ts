import { AddTodo } from '@/frontend/data/usecases/todo'
import { AddTodoRepositorySpy } from '../../mocks'

type SutTypes = {
  sut: AddTodo
  addTodoRepositorySpy: AddTodoRepositorySpy
}

const makeSut = (): SutTypes => {
  const addTodoRepositorySpy = new AddTodoRepositorySpy()
  const sut = new AddTodo(addTodoRepositorySpy)

  return {
    sut,
    addTodoRepositorySpy
  }
}

describe('AddTodo Smoke test UseCases', () => {
  test('Should be exists a AddTodo class', () => {
    expect(AddTodo).toBeDefined()
  })

  test('Should be exists a add method on AddTodo class', () => {
    const { sut } = makeSut()
    expect(sut.add).toBeDefined()
  })
})

describe('AddTodo UseCases ', () => {
  test('Should call AddTodo with correct params', () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')
    sut.add({ todoName: 'Any Name' })
    expect(addSpy).toHaveBeenCalledWith({ todoName: 'Any Name' })
  })

  test('Should call AddTodoRepository with correct params', () => {
    const { sut, addTodoRepositorySpy } = makeSut()
    const addTodoRepository = jest.spyOn(addTodoRepositorySpy, 'add')
    sut.add({ todoName: 'Any Name' })
    expect(addTodoRepository).toHaveBeenCalledWith({ todoName: 'Any Name' })
  })
})
