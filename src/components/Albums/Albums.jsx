import React from 'react'
import "./Albums.css"

export const Albums = ({albums}) => {
  return (
    <div>
      <div className="container">
        <div className="albums">
          <>
            <h1>Albums</h1>
            <div className="albumsBox">
              {albums.map((elm) => {
                return (
                  <div key={elm.id} className='albumsItem'>
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
