import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import { fetchGalleries, chooseGallery } from '../actions/gallery';
import GalleryList from '../components/galleryStuff/GalleryList';
import GalleryShow from '../components/galleryStuff/GalleryShow';

class GalleryContainer extends Component {
  render(){
    return (
      <div>
        Gallery
        <Route exact path='/galleries' render={() => <GalleryList galleries={this.props.galleries}/>
        } />
        <Route exact path='/galleries/:id' render={props =>
          <GalleryShow
          {...props}
          gallery={this.props.galleries[this.props.activeGallery]}
          chooseGallery={this.props.chooseGallery} /> } />
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
  return bindActionCreators({fetchGalleries, chooseGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
