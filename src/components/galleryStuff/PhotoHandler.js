import React from 'react';
import { Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const PhotoHandler = props => {
  return (
  <div className='gallery-photo-item'>
    <Image
      cloud_name='roguephoto'
      publicId={props.photo.public_id + "." + props.photo.format}
    >
      <Transformation
       width='300'
       crop='scale'
      />
    </Image>
  </div>
  )
}

PhotoHandler.defaultProps = {

}

export default PhotoHandler
