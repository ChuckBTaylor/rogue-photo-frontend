import React, { Component } from 'react';

class GalleryShow extends Component {

  state = {
    gallery: []
  }

  componentWillReceiveProps = nextProps => {

  }

  render(){
    console.log(this.props.gallery, "Gallery Show Props");
    return(
      <div>
      </div>
    )
  }

  componentDidMount = () => {
    console.log(this.props);
    const galleryTag = this.props.galleries[+this.props.match.params.id].name
    console.log(galleryTag);
    fetch(`https://res.cloudinary.com/roguephoto/image/list/${galleryTag}.json`)
      // .then(res => res.json())
      .then(json => {
        console.log(json);
        // this.setState({gallery: json.data.resources});
      })

  }
}

export default GalleryShow
