import { TodoLocalStorageRepository } from '@/frontend/infra/cache/local-storage/todo-local-storage-repository'

describe('TodoLocalStorage Smoke test Repository', () => {
  test('Should be exists TodoLocalStorageRepository', () => {
    expect(TodoLocalStorageRepository).toBeDefined()
  })

  test('Should be exists call method add TodoLocalStorageRepository', () => {
    expect(new TodoLocalStorageRepository().add).toBeDefined()
  })
})
