import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h1>CDG</h1>
        </Link>
      </div>
      <div>
        <div className="navbar-links">
          <Link to="/blog">Blog</Link>
          <Link to="/galleries">Galleries</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
