import {
  ValidateIdRepository,
  GenerateIdRepository
} from '@/frontend/data/protocols/cache/todo'

export class GenerateIdRepositorySpy implements GenerateIdRepository {
  id: string = 'valid-id'

  async generate(): Promise<GenerateIdRepository.Result> {
    return Promise.resolve(this.id)
  }
}

export class ValidateIdRepositorySpy implements ValidateIdRepository {
  isValid: boolean = true

  async validate(
    id: ValidateIdRepository.Params
  ): Promise<ValidateIdRepository.Result> {
    return Promise.resolve(this.isValid)
  }
}
