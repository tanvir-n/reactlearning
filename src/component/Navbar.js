import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="nav">
          <Link to="/" className="site-title">
              React Learning
          </Link>
          <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/blogs">Blog Articles</CustomLink>
            <CustomLink to="/contact">Contact Us</CustomLink>
            <CustomLink to="/signin">Sign in</CustomLink>              
          </ul>
      </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;
