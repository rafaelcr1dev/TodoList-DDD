import express from 'express'
import IndexController from './controllers/index-controller'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', IndexController)

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
