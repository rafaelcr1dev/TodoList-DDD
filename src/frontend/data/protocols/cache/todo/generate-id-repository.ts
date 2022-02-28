export interface GenerateIdRepository {
  generate: () => GenerateIdRepository.Result
}

export namespace GenerateIdRepository {
  export type Result = string
}
