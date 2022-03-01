export interface GenerateIdRepository {
  generate: () => Promise<GenerateIdRepository.Result>
}

export namespace GenerateIdRepository {
  export type Result = string
}
