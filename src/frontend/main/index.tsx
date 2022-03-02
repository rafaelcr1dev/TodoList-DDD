import React from 'react'
import ReactDOM from 'react-dom'

import AppComponent from '../presentation/components/app'
import { MakeTodo } from './factories/components/todo-factory'

ReactDOM.hydrate(
  <AppComponent data={{ comments: [] }}>
    <MakeTodo />
  </AppComponent>,
  document.querySelector('#app')
)
