import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo1.png'

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="#"></NavLink>
    <img src={logo} alt="logp" height={70}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar