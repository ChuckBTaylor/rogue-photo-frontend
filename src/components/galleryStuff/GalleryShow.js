import React, { Component } from 'react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cl = new cloudinary.Cloudinary({cloud_name: 'roguephoto'});

class GalleryShow extends Component {

  state = {
    photos: []
  }

  componentWillReceiveProps = nextProps => {
    if(!this.props.gallery && nextProps.gallery){
      this.fetchPhotos(nextProps.gallery.name)
    }
  }

  fetchPhotos = galleryTag => {
    fetch(`http://localhost:3000/api/v1/cloudinary_galleries?name=${galleryTag}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // this.setState({gallery: json.data.resources});
      })
  }

  render(){
    return(
      <div>
        <img src={cl.url('sample')}/>
      </div>
    )
  }

  componentDidMount = () => {
    if(!this.props.gallery){
      const path = window.location.pathname.split('/')
      this.props.chooseGallery(path[path.length - 1])
    } else {
      this.fetchPhotos(this.props.gallery.name)
    }
  }

  componentWillUnmount = () => {
    this.props.deselectGallery()
  }
}

export default GalleryShow;
