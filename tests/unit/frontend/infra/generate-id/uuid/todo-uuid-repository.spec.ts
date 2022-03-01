import { TodoUUIDRepository } from '@/frontend/infra/generate-id'
import uuid from 'uuid'

jest.mock('uuid', () => ({
  v4(): string {
    return 'any-valid-id'
  },
  validate(id: string): boolean {
    return id === 'any-valid-id'
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
  test('Should generate if TodoUUIDRepository is valid', async () => {
    const { sut } = makeSut()
    const todoId = await sut.generate()

    expect(todoId).toBe('any-valid-id')
    expect(todoId).not.toBeNull()
    expect(todoId).not.toBeFalsy()
    expect(typeof todoId).toBe('string')
  })

  test('Should call TodoUUIDRepository be called uuid.generate once', async () => {
    const { sut } = makeSut()
    const generateSpy = jest.spyOn(uuid, 'v4')

    await sut.generate()

    expect(generateSpy).toHaveBeenCalledTimes(1)
  })

  test('Should validate if TodoUUIDRepository is invalid', async () => {
    const { sut } = makeSut()
    const isValidId = await sut.validate('any-invalid-id')

    expect(isValidId).toBeFalsy()
  })

  test('Should validate if TodoUUIDRepository is valid', async () => {
    const { sut } = makeSut()
    const isValidId = await sut.validate('any-valid-id')

    expect(isValidId).toBeTruthy()
  })

  test('Should call uuid.validate with correct value', async () => {
    const { sut } = makeSut()
    const uuidSpy = jest.spyOn(uuid, 'validate')

    await sut.validate('any-valid-id')
    expect(uuidSpy).toHaveBeenCalledWith('any-valid-id')
  })

  test('Should call TodoUUIDRepository be called uuid.validate once', async () => {
    const { sut } = makeSut()
    const generateSpy = jest.spyOn(uuid, 'validate')

    await sut.generate()

    expect(generateSpy).toHaveBeenCalledTimes(1)
  })
})
