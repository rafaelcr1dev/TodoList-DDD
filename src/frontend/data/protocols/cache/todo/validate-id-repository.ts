export interface ValidateIdRepository {
  validate: (
    id: ValidateIdRepository.Params
  ) => Promise<ValidateIdRepository.Result>
}

export namespace ValidateIdRepository {
  export type Params = string

  export type Result = boolean
}
