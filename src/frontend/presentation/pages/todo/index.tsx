import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
 h2 {
   font-size: 4rem;
   color: #ff0000;
 }
`
const Title = styled.h1`
  font-size: 4rem;
  color: #0000ff;
`

const Container = styled.div`
  text-align: center;
`

const Todo: React.FC<any> = ({ addTodo, validation }) => {
  const [inputName, setInputName] = useState('')

  async function handleSubmit(e): Promise<void> {
    e.preventDefault()

    try {
      const nameError = validation.validate('name', { name: inputName })
      if (nameError) throw new Error(nameError)

      const todoResult = await addTodo.add({
        todoName: inputName
      })

      console.log(todoResult)

      alert('Todo cadastrado com successo!')
      setInputName('')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <Container>
          <GlobalStyle />
          <Title>Nova Todo List</Title>
        </Container>
        <nav>
          <Link to="/demo">About</Link>
        </nav>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={e => setInputName(e.target.value)}
            value={inputName}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
      <script src="http://localhost:35729/livereload.js"></script>
      <script src="bundle_client.js"></script>
    </>
  )
}

export default Todo
