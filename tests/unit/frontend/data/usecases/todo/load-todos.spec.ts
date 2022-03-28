import { LoadTodos } from '@/frontend/data/usecases/todo'
import { AddTodoRepositorySpy, throwError } from '../../mocks'
import { NotFoundResultsError } from '@/frontend/domain/errors'

type SutTypes = {
  sut: any
  loadTodosRepositorySpy: AddTodoRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadTodosRepositorySpy = new AddTodoRepositorySpy()
  const sut = new LoadTodos(loadTodosRepositorySpy)

  return {
    sut,
    loadTodosRepositorySpy
  }
}

describe('LoadTodos SmokeTest UseCases', () => {
  test('Should be exists a LoadTodos', () => {
    expect(LoadTodos).toBeDefined()
  })

  test('Should be exists a load method on LoadTodos', () => {
    const { sut } = makeSut()

    expect(sut.load).toBeDefined()
  })
})

describe('LoadTodos UseCases', () => {
  test('Should call load be called time once', async () => {
    const { sut } = makeSut()
    const loadSpy = jest.spyOn(sut, 'load').mockReturnValueOnce([{}])

    await sut.load()

    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  test('Should throw if LoadTodosRepository throws', async () => {
    const { sut, loadTodosRepositorySpy } = makeSut()
    jest
      .spyOn(loadTodosRepositorySpy, 'load')
      .mockImplementationOnce(throwError)

    const promise = sut.load()

    await expect(promise).rejects.toThrow()
  })

  test('Should LoadTodosRepository return the todos list with success', async () => {
    const { sut, loadTodosRepositorySpy } = makeSut()
    const todosResults = await sut.load()

    expect(todosResults).toEqual([loadTodosRepositorySpy.result])
  })

  test('Should throw NotFoundResultError if LoadTodosRepository return empty list', async () => {
    const { sut, loadTodosRepositorySpy } = makeSut()
    jest.spyOn(loadTodosRepositorySpy, 'load').mockResolvedValueOnce([])

    const promise = sut.load()

    await expect(promise).rejects.toThrow(new NotFoundResultsError())
  })
})
