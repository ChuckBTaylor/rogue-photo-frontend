import React, { Component } from 'react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';


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
    fetch(`https://res.cloudinary.com/roguephoto/image/list/${galleryTag}.json`)
      // .then(res => res.json())
      .then(json => {
        console.log(json);
        // this.setState({gallery: json.data.resources});
      })
  }

  render(){
    return(
      <div>
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

export default GalleryShow
