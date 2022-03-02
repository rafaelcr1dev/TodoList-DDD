import React from 'react'
import ReactDOM from 'react-dom/server'
import fs from 'fs'
import axios from 'axios'
import express from 'express'

import AppComponent from '../frontend/presentation/components/app'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', function (req, res) {
  let data

  try {
    data = fs.readFileSync('./src/frontend/index.html', 'utf8')
  } catch (err) {
    data = ''
    console.error(err)
  } finally {
    axios.get(`http://localhost:${PORT}/comments`).then(function (response) {
      res.send(
        data.replace(
          '<div id="app"></div>',
          `<div id="app">${ReactDOM.renderToString(
            <AppComponent data={{ comments: response.data.slice(0, 2) }} />
          )}</div>`
        )
      )
    })
  }
})

app.get('/comments', function (req, res) {
  res.send([
    {
      id: '001',
      name: 'Ayrto2n',
      message: 'Primeira Mensagem'
    },
    {
      id: '002',
      name: 'Teshima',
      message: 'Segunda Mensagem'
    },
    {
      id: '003',
      name: 'Joaquim',
      message: 'Terceira Mensagem'
    },
    {
      id: '004',
      name: 'Tereza',
      message: 'Quarta Mensagem'
    }
  ])
})

app.use(express.static('dist/public'))

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`)
})
