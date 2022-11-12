import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <section className="header">
  <Link to={"/"} className="logo">
  TRAVEL_APP
     
  </Link>
  
  <nav className="navbar">
    <Link to={"/"}>home</Link>
    <Link to={"/about"}>about</Link>
    <Link to={"/package"}>package</Link>
    <Link to={"/book"}>book</Link>
  </nav>
  <div id="menu-btn" className="fas fa-bars " />
</section>

  )
}

export default Header