import { AddTodo } from '@/frontend/data/usecases/todo'

import {
  AddTodoRepositorySpy,
  throwError,
  ManagerIdRepositorySpy
} from '../../mocks'

import { mockAddTodoParams } from '../../../domain/mocks'

type SutTypes = {
  sut: AddTodo
  addTodoRepositorySpy: AddTodoRepositorySpy
  managerIdRepositorySpy: ManagerIdRepositorySpy
}

const addTodoParams = mockAddTodoParams()

const makeSut = (): SutTypes => {
  const addTodoRepositorySpy = new AddTodoRepositorySpy()
  const managerIdRepositorySpy = new ManagerIdRepositorySpy()

  const sut = new AddTodo(addTodoRepositorySpy, managerIdRepositorySpy)

  return {
    sut,
    addTodoRepositorySpy,
    managerIdRepositorySpy
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

  test('Should call AddTodoRepository with correct params', async () => {
    const { sut, addTodoRepositorySpy, managerIdRepositorySpy } = makeSut()
    managerIdRepositorySpy.id = 'valid-id'

    const addTodoRepository = jest.spyOn(addTodoRepositorySpy, 'add')

    await sut.add(addTodoParams)

    expect(addTodoRepository).toHaveBeenCalledWith({
      ...addTodoParams,
      todoId: managerIdRepositorySpy.id
    })

    expect(addTodoRepositorySpy.params).toEqual({
      ...addTodoParams,
      todoId: managerIdRepositorySpy.id
    })
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

  test('Should throw if AddTodoRepository throws', async () => {
    const { sut, addTodoRepositorySpy } = makeSut()
    jest.spyOn(addTodoRepositorySpy, 'add').mockImplementationOnce(throwError)

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })

  test('Should validate if managerIdRepository is invalid', async () => {
    const { sut, managerIdRepositorySpy } = makeSut()
    managerIdRepositorySpy.id = 'invalid-id'

    const result = await sut.add(addTodoParams)

    expect(result.todoId).toBe('invalid-id')
  })

  test('Should validate if managerIdRepository isValid', async () => {
    const { sut, managerIdRepositorySpy } = makeSut()
    managerIdRepositorySpy.isValid = false

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })

  test('Should validate if managerIdRepository is valid', async () => {
    const { sut } = makeSut()
    const result = await sut.add(addTodoParams)

    expect(result.todoId).toBe('valid-id')
  })

  test('Should throw if managerIdRepository throws', async () => {
    const { sut, managerIdRepositorySpy } = makeSut()
    jest
      .spyOn(managerIdRepositorySpy, 'generate')
      .mockImplementationOnce(throwError)

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })

  test('Should throw if managerIdRepository validate return false', async () => {
    const { sut, managerIdRepositorySpy } = makeSut()

    jest
      .spyOn(managerIdRepositorySpy, 'validate')
      .mockReturnValueOnce(Promise.resolve(false))

    const promise = sut.add({
      todoName: 'Todo Name'
    })

    await expect(promise).rejects.toThrow()
  })
})
