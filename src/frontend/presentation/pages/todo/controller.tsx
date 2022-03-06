import React from 'react'
import ReactDOM from 'react-dom/server'
import { Request, Response, NextFunction } from 'express'
import { StaticRouter } from 'react-router-dom/server'
import { ServerStyleSheet } from 'styled-components'

import { Render } from '@/server/utils'
import { makeTodo } from '@/frontend/main/factories/components/todo-factory'
import Router from '@/frontend/presentation/components/router'

export default function (req: Request, res: Response, next: NextFunction): any {
  const sheet = new ServerStyleSheet()

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
    return next(error)
  }
}
