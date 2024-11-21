import React from 'react'

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATIONS</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </nav>

  )
}

export default Navbar