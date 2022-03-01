import { TodoUUIDRepository } from '@/frontend/infra/generate-id'

describe('TodoUUID Smoke Test Repository', () => {
  test('Should be exists TodoUUIDRepository', () => {
    expect(TodoUUIDRepository).toBeDefined()
  })

  test('Should be exists call method generate TodoUUIDRepository', () => {
    expect(new TodoUUIDRepository().generate).toBeDefined()
  })
})
