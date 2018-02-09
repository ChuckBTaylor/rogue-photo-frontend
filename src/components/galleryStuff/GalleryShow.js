import React, { Component } from 'react';
import PhotoHandler from './PhotoHandler';

class GalleryShow extends Component {


  state = {
    photos: []
  }

  componentWillReceiveProps = nextProps => {
    if(nextProps.gallery){
      this.props.chooseGallery(nextProps.gallery.id)
    }
    if(nextProps.gallery && (!this.props.gallery || (nextProps.gallery.id !== this.props.gallery.id))){
      console.log("Fetching new photos");
      this.fetchPhotos(nextProps.gallery.name)
      }
  }

  fetchPhotos = galleryName => {
    this.props.fetchGallery(galleryName)
      .then(json => this.setState({photos: json.resources}))
  }

  render(){
    const photos = this.state.photos.map((photoInfo, idx) => <PhotoHandler key={`photo-${idx}`} photo={photoInfo} />)
    console.log(this.props, "Gallery Show Props");
    const gName = this.props.gallery ? this.props.gallery.name : "None"
    return(
      <div className='gallery-photo-holder'>
        {gName}
        {photos}
      </div>
    )
  }

  componentDidMount = () => {
    if(!this.props.gallery){
      const path = window.location.pathname.split('/')
      this.props.chooseGallery(path[path.length - 1])
    }
  }

  componentWillUnmount = () => {
    this.props.deselectGallery()
  }
}

GalleryShow.defaultProps = {
}

export default GalleryShow
