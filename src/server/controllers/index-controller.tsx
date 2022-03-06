import React from 'react'
import ReactDOM from 'react-dom/server'
import axios from 'axios'
import { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom/server'
import { ServerStyleSheet } from 'styled-components'

import { Render } from '../utils'
import { makeTodo } from '@/frontend/main/factories/components/todo-factory'
import Router from '@/frontend/presentation/components/router'

export default function (req: Request, res: Response, next: any): any {
  axios.get(`http://localhost:3000/comments`).then(function (response) {
    const sheet = new ServerStyleSheet() // <-- creating out stylesheet helmet

    try {
      res.send(
        Render(
          ReactDOM.renderToString(
            sheet.collectStyles(
              <StaticRouter location={req.url}>
                <Router makeTodo={makeTodo} />
              </StaticRouter>
            )
          ),
          sheet.getStyleTags()
        )
      )
    } catch (error) {
      // handle error
      return next(error)
    }
  })
}
