import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
      <div className='header-inner-nav'>
          <NavLink to='/photographers' className='header-nav-tag'>Photographers</NavLink>
          <NavLink to='/galleries' className='header-nav-tag'>Galleries</NavLink>
          <NavLink to='/about' className='header-nav-tag'>About</NavLink>
          <NavLink to='/contact' className='header-nav-tag'>Contact</NavLink>
          <a href='https://www.instagram.com/roguephotonyc/' target="_blank" rel="noopener noreferrer" className='header-nav-tag'>Instagram</a>
          <NavLink to='/donate' className='header-nav-tag'>Donate</NavLink>
      </div>
  )
}

NavBar.defaultProps = {

}

export default NavBar
