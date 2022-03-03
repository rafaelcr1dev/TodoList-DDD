import React from 'react'
import ReactDOM from 'react-dom/server'
import axios from 'axios'
import { Request, Response } from 'express'
import { Render } from '../utils'

import AppComponent from '@/frontend/presentation/components/app'
import { MakeTodo } from '@/frontend/main/factories/components/todo-factory'

export default function (req: Request, res: Response): any {
  axios.get(`http://localhost:3000/comments`).then(function (response) {
    res.send(
      Render(
        ReactDOM.renderToString(
          <AppComponent>
            <MakeTodo />
          </AppComponent>
        )
      )
    )
  })
}
