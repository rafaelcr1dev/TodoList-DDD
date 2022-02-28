import faker from '@faker-js/faker'
import { AddTodoProtocol } from '@/frontend/domain/usecases'

export const mockAddTodoParams = (): AddTodoProtocol.Params => ({
  todoName: faker.name.findName()
})
