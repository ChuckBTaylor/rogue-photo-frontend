import React from 'react';
import GalleryButton from './GalleryButton';

const GalleryBar = props => {
  const galleryButtons = props.recentGalleries.map(gallery => <GalleryButton key={`gb-${gallery.id}`} gallery={gallery} history={props.history} chooseGallery={props.chooseGallery}/>)
  return (
  <div className='header-inner-nav btn-group'>
    {galleryButtons}
  </div>
  )
}

GalleryBar.defaultProps = {

}

export default GalleryBar
