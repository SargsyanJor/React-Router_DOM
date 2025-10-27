import React,{useState,useEffect} from 'react'
import "./Albums.css"

export const Albums = () => {

  const [albums, setAlbums] = useState([])
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => setAlbums(json))
    }, []);


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
