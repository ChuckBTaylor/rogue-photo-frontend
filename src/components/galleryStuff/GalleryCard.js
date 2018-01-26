import React from 'react';

const GalleryCard = props => {

  const onGalleryClick = () => {
    props.handleGalleryClick(props.gallery.id)
  }

  const onPhotographerClick = () => {
    props.handlePhotographerClick(props.gallery.user_id)
  }

  return(
    <div className='gallery-card-holder'>
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
      <div className='gallery-card photographer-name' onClick={onPhotographerClick}>
        Photographer: {props.gallery.user_id}
      </div>
      <br />
      <br />
    </div>
  )
}

export default GalleryCard;
