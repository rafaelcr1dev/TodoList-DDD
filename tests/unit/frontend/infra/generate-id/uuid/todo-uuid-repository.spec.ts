import { TodoUUIDRepository } from '@/frontend/infra/generate-id'

type SutTypes = {
  sut: TodoUUIDRepository
}

const makeSut = (): SutTypes => {
  const sut = new TodoUUIDRepository()

  return {
    sut
  }
}

describe('TodoUUID Smoke Test Repository', () => {
  test('Should be exists TodoUUIDRepository', () => {
    expect(TodoUUIDRepository).toBeDefined()
  })

  test('Should be exists call method generate TodoUUIDRepository', () => {
    const { sut } = makeSut()
    expect(sut.generate).toBeDefined()
  })

  test('Should be exists call method validate TodoUUIDRepository', () => {
    const { sut } = makeSut()
    expect(sut.validate).toBeDefined()
  })
})

describe('TodoUUID Repository', () => {
  describe('Generate', () => {})
})
