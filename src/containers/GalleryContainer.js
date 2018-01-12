import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import { fetchGalleries } from '../actions/gallery';
import GalleryList from '../components/galleryStuff/GalleryList';
import GalleryShow from '../components/galleryStuff/GalleryShow';

class GalleryContainer extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        Gallery
        <Route exact path='/galleries' render={() => <GalleryList galleries={this.props.galleries}/>
        } />
        <Route exact path='/galleries/:id' render={() => <GalleryShow gallery={this.props.galleries[this.props.activeGallery]} /> } />
      </div>
    )
  }

  componentDidMount = () => {
    this.props.fetchGalleries()
  }
}

const mapStateToProps = state => {
  return {
    galleries: state.galleries.list,
    activeGallery: state.galleries.activeGallery
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchGalleries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
