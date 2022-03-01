import {
  GenerateIdRepository,
  ValidateIdRepository
} from '@/frontend/data/protocols/cache/todo'

export class TodoUUIDRepository
  implements GenerateIdRepository, ValidateIdRepository
{
  generate(): GenerateIdRepository.Result {
    return null
  }

  async validate(
    id: ValidateIdRepository.Params
  ): Promise<ValidateIdRepository.Result> {
    return true
  }
}
