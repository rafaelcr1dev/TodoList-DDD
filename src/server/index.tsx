import express from 'express'

import ApiRoutes from '@/server/api/index'
import TodoController from '@/frontend/presentation/pages/todo/controller'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', TodoController)
app.use('/api', ApiRoutes)

app.use(express.static('dist/public'))

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`)
})
