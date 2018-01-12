import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GalleryList from '../components/galleryStuff/galleryList'
import { fetchGalleries } from '../actions/gallery'

class GalleryContainer extends Component {
  render(){
    return (
      <div>
        Gallery
        <GalleryList galleries={this.props.galleries}/>
      </div>
    )
  }

  componentDidMount = () => {
    this.props.fetchGalleries()
  }
}

const mapStateToProps = state => {
  return {
    galleries: state.galleries.list
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchGalleries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
