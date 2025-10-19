import "./Comments.css"

export const Comments = ({comments}) => {
  return (
    <div>
      <div className="container">
        <div className="comments">
          <>
            <h1>Commnets</h1>
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
