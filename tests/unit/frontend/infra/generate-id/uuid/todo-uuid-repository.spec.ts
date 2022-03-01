import { TodoUUIDRepository } from '@/frontend/infra/generate-id'

describe('TodoUUID Smoke Test Repository', () => {
  test('Should be exists TodoUUIDRepository', () => {
    expect(TodoUUIDRepository).toBeDefined()
  })

  test('Should be exists call method generate TodoUUIDRepository', () => {
    expect(new TodoUUIDRepository().generate).toBeDefined()
  })

  test('Should be exists call method validate TodoUUIDRepository', () => {
    expect(new TodoUUIDRepository().validate).toBeDefined()
  })
})
