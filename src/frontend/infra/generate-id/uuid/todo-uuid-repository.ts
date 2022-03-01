import { v4 as uuidv4 } from 'uuid'

import {
  GenerateIdRepository,
  ValidateIdRepository
} from '@/frontend/data/protocols/cache/todo'

export class TodoUUIDRepository
  implements GenerateIdRepository, ValidateIdRepository
{
  async generate(): Promise<GenerateIdRepository.Result> {
    return uuidv4()
  }

  async validate(
    id: ValidateIdRepository.Params
  ): Promise<ValidateIdRepository.Result> {
    return true
  }
}
