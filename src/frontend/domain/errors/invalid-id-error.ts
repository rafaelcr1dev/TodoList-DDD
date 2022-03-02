export class InvalidIdError extends Error {
  constructor() {
    super('ID invalido')
    this.name = 'InvalidCredentialError'
  }
}
