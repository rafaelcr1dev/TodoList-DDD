import { TodoUUIDRepository } from '@/frontend/infra/generate-id'
import uuid from 'uuid'

jest.mock('uuid', () => ({
  v4(): string {
    return 'any-valid-id'
  }
}))

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
  test('Should generate TodoUUIDRepository is valid', async () => {
    const { sut } = makeSut()
    const todoId = await sut.generate()

    expect(todoId).toBe('any-valid-id')
    expect(todoId).not.toBeNull()
    expect(todoId).not.toBeFalsy()
    expect(typeof todoId).toBe('string')
  })
})
