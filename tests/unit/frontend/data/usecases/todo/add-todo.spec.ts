import { AddTodo } from '@/frontend/data/usecases/todo'

const makeSut = (): any => {
  const sut = new AddTodo()

  return {
    sut
  }
}

describe('AddTodo Smoke test UseCases', () => {
  test('Should be exists a AddTodo class', () => {
    expect(AddTodo).toBeDefined()
  })

  test('Should be exists a add method on AddTodo class', () => {
    expect(new AddTodo().add).toBeDefined()
  })
})

describe('AddTodo UseCases ', () => {
  test('Should call add with correct params', () => {
    const { sut } = makeSut()
    const addSpy = jest.spyOn(sut, 'add')
    sut.add({ todoName: 'Any Name' })
    expect(addSpy).toHaveBeenCalledWith({ todoName: 'Any Name' })
  })
})
