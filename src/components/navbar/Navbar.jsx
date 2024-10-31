import React from 'react'
import './Navbar.css';

const name = "anel babu";

const Navbar = () => {
  return (
    <>
        <ul className='navbar'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>{name}</li>
        </ul>
    </>
  )
}

export default Navbar;
