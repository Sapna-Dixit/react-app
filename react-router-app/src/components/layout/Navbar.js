import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container">

          <Link className="navbar-brand" to="/">
            React User
          </Link>
           <button
                className="navbar-toggler" 
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar navbar-nav mr-auto">
              <li className="nav-item">
                  <NavLink className="nav-link" exact to ="/">
                    Home
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" exact to ="/about">
                    About
                  </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to = "/contact">Contact</NavLink>
              </li>  
            </ul>

          </div>
        </div>
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </nav>
    )
};
export  default Navbar;
