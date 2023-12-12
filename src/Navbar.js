import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
    <div>
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><a href="/">Logout</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar