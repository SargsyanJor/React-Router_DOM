import "./User.css"

export const User = ({ user }) => {

  return (
    <div>
      <div className="container">
        <div className="user">
          <>
            <h1>User</h1>
            <div className="userBox">
              {user.map((elm) => {
                return (
                  <div key={elm.id} className='userItem'>
                    <li className='id' >#{elm.id}</li>
                    <li className='name'>{elm.name}</li>
                    <li className='email'>{elm.email}</li>
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
