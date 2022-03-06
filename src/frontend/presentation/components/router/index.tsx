import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Factory = {
  makeTodo: React.FC
}

const Router: React.FC<Factory> = (factory: Factory) => {
  const Todo = factory.makeTodo

  return (
    <>
      <head></head>
      <body>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/demo" element={<Todo />} />
        </Routes>
      </body>
    </>
  )
}

export default Router
