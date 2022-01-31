import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function AppComponent(props) {
  const [comments, setComments] = useState(props.data.comments || [])

  useEffect(() => {
    axios.get('http://localhost:3030/comments').then(function(response) {
      setComments(response.data)
    })
  }, []);

  function excluircomment(commentId) {
    console.log(commentId);
  }

  return (
    <>
      <h3>Lista de comentários ({comments.length})</h3>
      <hr />
      {comments.length && (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <span>{comment.name} - {comment.message}</span>
              <button type="button" onClick={() => excluircomment(comment.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}