import React from 'react'
import {Link} from 'react-router-dom'

function navBar() {
  return (
    <nav className="nav">
  <div className="container">
    <h1 className="logo">
      <Link to="/">
      <a href="#"><i className="fa-solid fa-moon"></i>Welcome</a>
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/">
        <a href="#" className="current">Home</a>
        </Link>
      </li>
      <li>
        <Link to="/About">
        <a>About Me</a>
        </Link>
      </li>
      <li>
        <Link to="/Projects">
        <a>Projects</a>
        </Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default navBar