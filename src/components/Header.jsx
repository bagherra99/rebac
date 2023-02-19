import React from 'react'
import './header.css'
import logo from '../images/logo1-removebg-preview.png'

const Header = () => {
  return (
    <header className='header-app'>
        <div className='title'>
            <img src={logo} alt="logo" />
            <h4>REBAC CONSTRUCTION</h4>
        </div>
        <div className='nav'>
          <ul className='nav-links'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
    </header>
  )
}

export default Header