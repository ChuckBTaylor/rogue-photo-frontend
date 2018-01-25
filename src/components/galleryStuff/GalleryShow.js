import React, { Component } from 'react';

class GalleryShow extends Component {

  componentWillReceiveProps = nextProps => {
    console.log(nextProps);
  }

  render(){
    console.log(this.props.gallery, "Gallery Show Props");
    return(
      <div>
      </div>
    )
  }

  componentDidMount = () => {
    this.props.chooseGallery(this.props.match.params.id)
  }
}

export default GalleryShow
