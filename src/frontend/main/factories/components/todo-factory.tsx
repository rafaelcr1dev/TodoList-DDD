import React from 'react'
import { makeTodoValidationFactory } from './todo-validation-factory'
import { makeAddTodoFactory } from '../usecases/add-todo/add-todo-factory'
import Todo from '../../../presentation/components/todo'

export const MakeTodo: React.FC = () => {
  return (
    <div>
      <Todo
        addTodo={makeAddTodoFactory()}
        validation={makeTodoValidationFactory()}
      />
    </div>
  )
}
