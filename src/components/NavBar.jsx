import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='flex flex-row gap-8 fixed '>
      <Link to='/'><button className='button'>Sign Up</button></Link>
      <Link to='/signin'><button className='button'>Sign In</button></Link>
      <Link to='/home'><button className='button'>Home</button></Link>
      <Link to='home'></Link>
    </div>
  )
}

export default NavBar
