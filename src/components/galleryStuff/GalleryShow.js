import React, { Component } from 'react';
import PhotoHandler from './PhotoHandler';

class GalleryShow extends Component {


  state = {
    photos: []
  }

  componentWillReceiveProps = nextProps => {
    if(!this.props.gallery && nextProps.gallery){
      this.fetchPhotos(nextProps.gallery.name)

      }
  }

  fetchPhotos = galleryName => {
    this.props.fetchGallery(galleryName)
      .then(json => this.setState({photos: json.resources}))
  }

  render(){
    const photos = this.state.photos.map((photoInfo, idx) => <PhotoHandler key={`photo-${idx}`} photo={photoInfo} />)
    return(
      <div className='gallery-photo-holder'>
        {photos}
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
