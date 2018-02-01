import React from 'react';
import NavBar from './NavBar'
import GalleryBar from './GalleryBar'

const HeaderBar = props => {
  return (
  <div className='header-top'>
    <NavBar />
    <GalleryBar />
  </div>
  )
}

HeaderBar.defaultProps = {

}

export default HeaderBar
