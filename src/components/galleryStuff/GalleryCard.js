import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryCard = props => {
  const route = `/galleries/${props.gallery.id}`
  const photographerRoute = `/photographers/${props.gallery.user_id}`
  console.log(props, "gallery card props");

  const onGalleryClick = () => {
    props.handleGalleryClick(props.gallery.id)
  }

  const onPhotographerClick = () => {
    props.handlePhotographerClick(props.gallery.user_id)
  }

  return(
    <div>
      <div className="gallery-card header-photo" onClick={onGalleryClick}>
        Header Photo
      </div>
      <div className="gallery-card event-name" onClick={onGalleryClick}>
        Event: {props.gallery.event} error?
      </div>
      <div className='gallery-card location-name' onClick={onGalleryClick}>
        Location: {props.gallery.location}
      </div>
      <div className='gallery-card gallery-date' onClick={onGalleryClick}>
        Date: {props.gallery.date}
      </div>
      <div className='gallery-card photographer-name'>
        Photographer: {props.gallery.user_id}
      </div>
      <br />
      <br />
    </div>
  )
}

export default GalleryCard;
