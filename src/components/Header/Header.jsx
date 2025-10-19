import { Nav } from './Nav/Nav'

import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <li className='logo'>LoGo</li>
          <div className="nav">
            <Nav />
          </div>
        </div>
      </div>
    </header>

  )
}
