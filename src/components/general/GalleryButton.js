import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryButton = props => {

  const route = `/galleries/${props.gallery.id}`

  const navToGallery = () => {
    props.history.push(route)
    props.chooseGallery(props.gallery.id)
  }

  return (
  <button className="nav-bar-gallery-button" onClick={navToGallery}>
    {props.gallery.name}
  </button>
  )
}

GalleryButton.defaultProps = {
  gallery: {}
}

export default GalleryButton;
