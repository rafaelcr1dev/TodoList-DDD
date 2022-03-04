import React from 'react'
import ReactDOM from 'react-dom/server'
import axios from 'axios'
import { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom/server'

import { Render } from '../utils'
import { makeTodo } from '@/frontend/main/factories/components/todo-factory'
import Router from '@/frontend/presentation/components/router'

export default function (req: Request, res: Response): any {
  axios.get(`http://localhost:3000/comments`).then(function (response) {
    res.send(
      Render(
        ReactDOM.renderToString(
          <StaticRouter location={req.url}>
            <Router makeTodo={makeTodo} />
          </StaticRouter>
        )
      )
    )
  })
}
