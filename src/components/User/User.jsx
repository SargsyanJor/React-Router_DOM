import { NavLink } from "react-router-dom";
import "./User.css"
import { useState, useEffect } from "react";

export const User = () => {

  const [user, setUser] = useState([]);

    console.log(user);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json)
      )
  }, []);



  return (
    <div>
      <div className="container">
        <div className="user">
          <>
            <h1>User</h1>
            <div className="userBox">
              {user.map((elm) => {
                return (
                  <NavLink to={`/${elm.id}`}>
                    <div key={elm.id} className='userItem'>
                      <li className='id' >#{elm.id}</li>
                      <li className='name'>{elm.name}</li>
                      <li className='email'>{elm.email}</li>
                    </div>
                  </NavLink>
                )


              })}
            </div>
          </>

        </div>
      </div>
    </div>

  )
}
