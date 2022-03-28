export class NotFoundResultsError extends Error {
  constructor() {
    super('Resultados não encontrados')
    this.name = 'NotFoundResultsError'
  }
}
