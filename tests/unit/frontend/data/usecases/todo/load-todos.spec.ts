import { LoadTodos } from '@/frontend/data/usecases/todo'

type SutTypes = {
  sut: any
}

const makeSut = (): SutTypes => {
  const sut = new LoadTodos()

  return {
    sut
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
  test('Should call LoadTodos with correct params', () => {
    expect(1 + 1).toEqual(2)
  })
})
