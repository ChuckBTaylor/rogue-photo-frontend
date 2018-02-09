import React from 'react';

const GalleryButton = props => {
  const navToGallery = () => {
    console.log(props.gallery.name);
  }
  return (
  <button onClick={navToGallery}>
    {props.gallery.name}
  </button>
  )
}

GalleryButton.defaultProps = {

}

export default GalleryButton
