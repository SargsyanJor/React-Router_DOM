import "./Comments.css"

import React, { useEffect, useState } from 'react';

export const Comments = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => setComments(json))

  }, []);

  return (
    <div>
      <div className="container">
        <div className="comments">
          <>
            <h1>Comments</h1>
            <div className="commentsBox">
              {comments.map((elm) => {
                return (
                  <div key={elm.id} className='commentsItem'>
                    <li className='id' >#{elm.id}</li>
                    <li className='email'>{elm.email}</li>
                    <li className='body'>{elm.body}</li>
                  </div>
                )


              })}
            </div>
          </>

        </div>
      </div>
    </div>
  )
}
