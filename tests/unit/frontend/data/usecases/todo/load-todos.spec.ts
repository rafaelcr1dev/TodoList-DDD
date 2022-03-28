import { LoadTodos } from '@/frontend/data/usecases/todo'
import { LoadTodoProtocol } from '@/frontend/domain/usecases'
import { throwError } from '../../mocks'

class LoadTodosRepositorySpy {
  load(): LoadTodoProtocol.Result[] {
    return []
  }
}

type SutTypes = {
  sut: any
  loadTodosRepositorySpy: LoadTodosRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadTodosRepositorySpy = new LoadTodosRepositorySpy()
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
    const loadSpy = jest.spyOn(sut, 'load')

    await sut.load()

    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  test('Should throw if LoadTodosRepository throws', async () => {
    const { sut, loadTodosRepositorySpy } = makeSut()
    jest
      .spyOn(loadTodosRepositorySpy, 'load')
      .mockImplementationOnce(throwError)

    const promise = sut.load()

    expect(promise).rejects.toThrow()
  })
})
