import React from 'react'
import "./Posts.css"
import { NavLink } from 'react-router-dom'

export const Posts = ({ post }) => {

  return (
    <div>
      <div className="container">
        <div className="posts">
          <>
            <h1>Posts</h1>
            <div className="postsBox">
              {post.map((elm) => (
                <NavLink to={`/posts/${elm.id}`}>
                  <div key={elm.id} className='postsItem'>
                    <li className='img'><img src={elm.image} alt="" /></li>
                    <li className='id' >#{elm.id}</li>
                    <li className='title'>{elm.title}</li>
                  </div>
                </NavLink>

              ))}
            </div>
          </>

        </div>
      </div>
    </div>

  )
}
