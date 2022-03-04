import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Factory = {
  makeTodo: React.FC
}

const Router: React.FC<Factory> = (factory: Factory) => {
  const Todo = factory.makeTodo

  return (
    <>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/demo" element={<Todo />} />
        </Routes>
        <script src="http://localhost:35729/livereload.js"></script>
        <script src="bundle_client.js"></script>
      </body>
    </>
  )
}

export default Router
