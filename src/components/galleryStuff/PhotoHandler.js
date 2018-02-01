import React, { Component } from 'react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'roguephoto'});

const PhotoHandler = props => {

  console.log(props);
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
