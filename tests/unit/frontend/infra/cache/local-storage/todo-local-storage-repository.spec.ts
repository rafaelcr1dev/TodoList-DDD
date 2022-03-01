import { TodoLocalStorageRepository } from '@/frontend/infra/cache/local-storage/todo-local-storage-repository'

type SutTypes = {
  sut: TodoLocalStorageRepository
}

const makeSut = (): SutTypes => {
  const sut = new TodoLocalStorageRepository()
  return {
    sut
  }
}

describe('TodoLocalStorage Smoke test Repository', () => {
  test('Should be exists TodoLocalStorageRepository', () => {
    expect(TodoLocalStorageRepository).toBeDefined()
  })

  test('Should be exists call method add TodoLocalStorageRepository', () => {
    const { sut } = makeSut()
    expect(sut.add).toBeDefined()
  })
})

describe('TodoLocalStorage Repository', () => {
  test('Should call add with correct values', async () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')

    await sut.add({
      todoId: 'any-valid-id',
      todoName: 'Any todo name'
    })

    expect(addSpy).toHaveBeenCalledWith({
      todoId: 'any-valid-id',
      todoName: 'Any todo name'
    })
  })
})
