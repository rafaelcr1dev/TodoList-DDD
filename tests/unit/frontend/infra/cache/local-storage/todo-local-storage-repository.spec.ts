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

const mockTodo = {
  todoId: 'valid-id',
  todoName: 'any name',
  todoActive: true
}

describe('TodoLocalStorage Smoke test Repository', () => {
  test('Should be exists TodoLocalStorageRepository', () => {
    expect(TodoLocalStorageRepository).toBeDefined()
  })

  test('Should be exists call method add TodoLocalStorageRepository', () => {
    const { sut } = makeSut()
    expect(sut.add).toBeDefined()
  })

  test('Should be exists call method load TodoLocalStorageRepository', () => {
    const { sut } = makeSut()
    expect(sut.load).toBeDefined()
  })
})

describe('TodoLocalStorage Repository', () => {
  beforeEach(() => {
    localStorage.clear()
  })

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

  test('Should call localStorage with correct values', async () => {
    const { sut } = makeSut()

    await sut.add({
      todoId: 'any-valid-id',
      todoName: 'Any todo name'
    })

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'todos',
      JSON.stringify([
        {
          todoId: 'any-valid-id',
          todoName: 'Any todo name',
          todoActive: true
        }
      ])
    )
  })

  test('Should call localStorage be called setItem once', async () => {
    const { sut } = makeSut()
    const setItemSpy = jest.spyOn(localStorage, 'setItem')

    await sut.add({
      todoId: 'any-valid-id',
      todoName: 'Any todo name'
    })

    expect(setItemSpy).toHaveBeenCalledTimes(1)
  })

  test('Should add correct values on localStorage with success', async () => {
    const { sut } = makeSut()

    const todoResult = await sut.add({
      todoId: 'any-valid-id',
      todoName: 'Any todo name'
    })

    expect(todoResult).toEqual({
      todoId: 'any-valid-id',
      todoName: 'Any todo name',
      todoActive: true
    })
  })

  test('Should call localStorage be called getItem once', async () => {
    const { sut } = makeSut()
    const getItemSpy = jest.spyOn(localStorage, 'getItem')

    await sut.load()

    expect(getItemSpy).toHaveBeenCalledTimes(1)
  })

  test('Should load return correct values on localStorage with success', async () => {
    const { sut } = makeSut()

    jest
      .spyOn(localStorage, 'getItem')
      .mockReturnValueOnce(JSON.stringify([mockTodo]))

    const todoResult = await sut.load()

    expect(todoResult).toEqual([mockTodo])
  })

  test('Should call localStorage getItem name with correct value', async () => {
    const { sut } = makeSut()

    await sut.load()

    expect(localStorage.getItem).toHaveBeenCalledWith('todos')
  })
})
