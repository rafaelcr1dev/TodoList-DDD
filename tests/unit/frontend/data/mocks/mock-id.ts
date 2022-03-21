import {
  ValidateIdRepository,
  GenerateIdRepository,
  ManagerIdRepository
} from '@/frontend/data/protocols/cache/todo'

export class ManagerIdRepositorySpy implements ManagerIdRepository {
  id: string = 'valid-id'
  isValid: boolean = true

  async generate(): Promise<GenerateIdRepository.Result> {
    return Promise.resolve(this.id)
  }

  async validate(
    id: ValidateIdRepository.Params
  ): Promise<ValidateIdRepository.Result> {
    return Promise.resolve(this.isValid)
  }
}
