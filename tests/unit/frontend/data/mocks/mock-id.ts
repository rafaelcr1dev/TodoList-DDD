import { GenerateIdRepository } from '@/frontend/data/protocols/cache/todo/generate-id-repository'

export class GenerateIdRepositorySpy implements GenerateIdRepository {
  id: string = 'valid-id'

  generate(): GenerateIdRepository.Result {
    return this.id
  }
}
