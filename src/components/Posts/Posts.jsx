import React from 'react'
import "./Posts.css"

export const Posts = ({post}) => {
  
  return (
    <div>
      <div className="container">
        <div className="posts">
          <>
            <h1>Posts</h1>
            <div className="postsBox">
              {post.map((elm) => {
                return (
                  <div key={elm.id} className='postsItem'>
                    <li className='img'><img src={elm.image} alt="" /></li>
                    <li className='id' >#{elm.id}</li>
                    <li className='title'>{elm.title}</li>
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
