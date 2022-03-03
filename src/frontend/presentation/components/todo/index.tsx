import React, { useState } from 'react'

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
    <div>
      <h1>Nova Todo List</h1>
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
  )
}

export default Todo
