export interface ManagerIdRepository {
  generate: () => Promise<GenerateIdRepository.Result>
  validate: (
    id: ValidateIdRepository.Params
  ) => Promise<ValidateIdRepository.Result>
}

export namespace GenerateIdRepository {
  export type Result = string
}

export namespace ValidateIdRepository {
  export type Params = string

  export type Result = boolean
}
