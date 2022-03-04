import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from '../presentation/components/router'

import { makeTodo } from './factories/components/todo-factory'

ReactDOM.hydrate(
  <BrowserRouter>
    <Router makeTodo={makeTodo} />
  </BrowserRouter>,
  document.documentElement
)
