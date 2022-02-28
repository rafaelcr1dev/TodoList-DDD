import { AddTodo } from '@/frontend/data/usecases/todo'

import { AddTodoRepositorySpy, throwError } from '../../mocks'
import { mockAddTodoParams } from '../../../domain/mocks'

type SutTypes = {
  sut: AddTodo
  addTodoRepositorySpy: AddTodoRepositorySpy
}

const addTodoParams = mockAddTodoParams()

const makeSut = (): SutTypes => {
  const addTodoRepositorySpy = new AddTodoRepositorySpy()
  const sut = new AddTodo(addTodoRepositorySpy)

  return {
    sut,
    addTodoRepositorySpy
  }
}

describe('AddTodo Smoke test UseCases', () => {
  test('Should be exists a AddTodo', () => {
    expect(AddTodo).toBeDefined()
  })

  test('Should be exists a add method on AddTodo', () => {
    const { sut } = makeSut()

    expect(sut.add).toBeDefined()
  })
})

describe('AddTodo UseCases ', () => {
  test('Should call AddTodo with correct params', () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')

    sut.add(addTodoParams)

    expect(addSpy).toHaveBeenCalledWith(addTodoParams)
  })

  test('Should call AddTodoRepository with correct params', () => {
    const { sut, addTodoRepositorySpy } = makeSut()
    const addTodoRepository = jest.spyOn(addTodoRepositorySpy, 'add')

    sut.add(addTodoParams)

    expect(addTodoRepository).toHaveBeenCalledWith(addTodoParams)
  })

  test('Should call AddTodo be called time once', async () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')

    await sut.add(addTodoParams)

    expect(addSpy).toHaveBeenCalledTimes(1)
  })

  test('Should call AddTodoRepository be called time once', async () => {
    const { sut, addTodoRepositorySpy } = makeSut()
    const addSpy = jest.spyOn(addTodoRepositorySpy, 'add')

    await sut.add(addTodoParams)

    expect(addTodoRepositorySpy.nonce).toBe(1)
    expect(addSpy).toHaveBeenCalledTimes(1)
  })

  test('Should return null AddTodoRepository', async () => {
    const { sut, addTodoRepositorySpy } = makeSut()
    addTodoRepositorySpy.result = null

    const todoResponse = await sut.add(addTodoParams)

    expect(todoResponse).toBeNull()
  })

  test('Should throw if AddTodoRepository throws', async () => {
    const { sut, addTodoRepositorySpy } = makeSut()
    jest.spyOn(addTodoRepositorySpy, 'add').mockImplementationOnce(throwError)

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })
})
