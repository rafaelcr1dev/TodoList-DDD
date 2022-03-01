import { TodoLocalStorageRepository } from '@/frontend/infra/cache/local-storage/todo-local-storage-repository'

describe('TodoLocalStorage Smoke test Repository', () => {
  test('Should be exists TodoLocalStorageRepository', () => {
    expect(TodoLocalStorageRepository).toBeDefined()
  })
})
