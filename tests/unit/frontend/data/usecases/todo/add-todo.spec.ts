import { AddTodo } from '@/frontend/data/usecases/todo'

import {
  AddTodoRepositorySpy,
  throwError,
  GenerateIdRepositorySpy,
  ValidateIdRepositorySpy
} from '../../mocks'

import { mockAddTodoParams } from '../../../domain/mocks'

type SutTypes = {
  sut: AddTodo
  addTodoRepositorySpy: AddTodoRepositorySpy
  generateIdRepositorySpy: GenerateIdRepositorySpy
  validateIdRepositorySpy: ValidateIdRepositorySpy
}

const addTodoParams = mockAddTodoParams()

const makeSut = (): SutTypes => {
  const addTodoRepositorySpy = new AddTodoRepositorySpy()
  const generateIdRepositorySpy = new GenerateIdRepositorySpy()
  const validateIdRepositorySpy = new ValidateIdRepositorySpy()

  const sut = new AddTodo(
    addTodoRepositorySpy,
    generateIdRepositorySpy,
    validateIdRepositorySpy
  )

  return {
    sut,
    addTodoRepositorySpy,
    generateIdRepositorySpy,
    validateIdRepositorySpy
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
    const { sut, addTodoRepositorySpy, generateIdRepositorySpy } = makeSut()
    generateIdRepositorySpy.id = 'valid-id'

    const addTodoRepository = jest.spyOn(addTodoRepositorySpy, 'add')

    await sut.add(addTodoParams)

    expect(addTodoRepository).toHaveBeenCalledWith({
      ...addTodoParams,
      todoId: generateIdRepositorySpy.id
    })

    expect(addTodoRepositorySpy.params).toEqual({
      ...addTodoParams,
      todoId: generateIdRepositorySpy.id
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

  test('Should validate if GenerateIdRepository is invalid', async () => {
    const { sut, generateIdRepositorySpy } = makeSut()
    generateIdRepositorySpy.id = 'invalid-id'

    const result = await sut.add(addTodoParams)

    expect(result.todoId).toBe('invalid-id')
  })

  test('Should validate if GenerateIdRepository isValid', async () => {
    const { sut, validateIdRepositorySpy } = makeSut()
    validateIdRepositorySpy.isValid = false

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })

  test('Should validate if GenerateIdRepository is valid', async () => {
    const { sut } = makeSut()
    const result = await sut.add(addTodoParams)

    expect(result.todoId).toBe('valid-id')
  })

  test('Should throw if GenerateIdRepository throws', async () => {
    const { sut, generateIdRepositorySpy } = makeSut()
    jest
      .spyOn(generateIdRepositorySpy, 'generate')
      .mockImplementationOnce(throwError)

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })

  test('Should throw if GenerateIdRepository validate return false', async () => {
    const { sut, validateIdRepositorySpy } = makeSut()

    jest
      .spyOn(validateIdRepositorySpy, 'validate')
      .mockReturnValueOnce(Promise.resolve(false))

    const promise = sut.add({
      todoName: 'Todo Name'
    })

    await expect(promise).rejects.toThrow()
  })
})
