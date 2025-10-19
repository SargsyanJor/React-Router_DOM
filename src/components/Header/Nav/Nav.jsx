import { NavLink } from "react-router-dom"

import "./Nav.css"



export const Nav = () => {
    return (

        <>

            <nav>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/albums">Albums </NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/comments">Comments </NavLink>
            </nav>
        </>

    )

}
