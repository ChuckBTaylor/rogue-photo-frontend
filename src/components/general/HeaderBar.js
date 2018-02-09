import React from 'react';
import NavBar from './NavBar'
import GalleryBar from './GalleryBar'

const HeaderBar = props => {
  console.log(props, "from HeaderBar");
  return (
  <div className='header-top'>
    <NavBar />
    <GalleryBar chooseGallery={props.chooseGallery} recentGalleries={props.recentGalleries} history={props.history} />
  </div>
  )
}

HeaderBar.defaultProps = {

}

export default HeaderBar
