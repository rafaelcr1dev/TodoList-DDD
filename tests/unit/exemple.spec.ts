describe('Name ....', () => {
  test('Should sum two numbers 1 + 3 and equal 4', () => {
    expect(1 + 3).toBe(4)
  })
})

// import { ExempleSpec } from '@/frontend/data/usecases/exemple.spec'

type SutTypes = {
  sut: any
}

class ExempleSpec {
  // constructor(private readonly name) {}

  add(): SutTypes {
    return {
      sut: {}
    }
  }
}

const makeSut = (): SutTypes => {
  const sut = new ExempleSpec()

  return {
    sut
  }
}

describe('ExempleSpec SmokeTest UseCases', () => {
  test('Should be exists a ExempleSpec', () => {
    expect(ExempleSpec).toBeDefined()
  })

  test('Should be exists a add method on ExempleSpec', () => {
    const { sut } = makeSut()

    expect(sut.add).toBeDefined()
  })
})

describe('ExempleSpec UseCases', () => {
  test('Should call ExempleSpec with correct params', () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')
    const anyParams = { anyKey: 'any-vaue' }

    sut.add(anyParams)
    expect(addSpy).toHaveBeenCalledWith(addTodoParams)
  })

  test('Should call ExempleSpec be called time once', async () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')

    await sut.add()

    expect(addSpy).toHaveBeenCalledTimes(1)
  })

  test('Should throw if ExempleSpec throws', async () => {
    const { sut, generateIdRepositorySpy } = makeSut()
    jest
      .spyOn(generateIdRepositorySpy, 'generate')
      .mockImplementationOnce(throwError)

    const promise = sut.add(addTodoParams)

    await expect(promise).rejects.toThrow()
  })

  test('Should throw if ExempleSpec validate return false', async () => {
    const { sut, validateIdRepositorySpy } = makeSut()

    jest
      .spyOn(validateIdRepositorySpy, 'validate')
      .mockReturnValueOnce(Promise.resolve(false))

    const promise = sut.add({
      todoName: 'Todo Name'
    })

    await expect(promise).rejects.toThrow()
  })
})
