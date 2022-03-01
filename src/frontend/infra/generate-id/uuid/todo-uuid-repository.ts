import uuid from 'uuid'

import {
  GenerateIdRepository,
  ValidateIdRepository
} from '@/frontend/data/protocols/cache/todo'

export class TodoUUIDRepository
  implements GenerateIdRepository, ValidateIdRepository
{
  async generate(): Promise<GenerateIdRepository.Result> {
    return uuid.v4()
  }

  async validate(
    id: ValidateIdRepository.Params
  ): Promise<ValidateIdRepository.Result> {
    return uuid.validate(id)
  }
}
