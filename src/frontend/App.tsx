import React, { useEffect, useState } from 'react'
import axios from 'axios'

type IProps = {
  data: {
    comments: []
  }
}

export default function AppComponent(props: IProps): any {
  const [comments, setComments] = useState(props.data.comments || [])

  useEffect(() => {
    axios.get('http://localhost:3030/comments').then(function (response) {
      setComments(response.data)
    })
  }, [])

  function deleteComment(commentId): void {
    console.log(commentId)
  }

  return (
    <>
      <h3>Lista de comentários ({comments.length})</h3>
      <hr />
      {comments.length && (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <span>
                {comment.name} - {comment.message}
              </span>
              <button type="button" onClick={() => deleteComment(comment.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
