import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import { fetchGalleries, chooseGallery, deselectGallery } from '../actions/gallery';
import GalleryList from '../components/galleryStuff/GalleryList';
import GalleryShow from '../components/galleryStuff/GalleryShow';

class GalleryContainer extends Component {

  handleGalleryClick = id => {
    this.props.chooseGallery(id)
    this.props.history.push(this.props.location.pathname + `/${id}`)
  }

  handlePhotographerClick = id => {

  }

  render(){
    return (
      <div>
        Gallery
        <Route exact path='/galleries' render={props =>
          <GalleryList
            galleries={this.props.galleries}
            handleGalleryClick={this.handleGalleryClick}
            handlePhotographerClick={this.handlePhotographerClick}
          />
        }/>

        <Route exact path='/galleries/:id' render={props =>
          <GalleryShow
            {...props}
            gallery={this.props.galleries[this.props.activeGallery]}
            chooseGallery={this.props.chooseGallery}
            deselectGallery={this.props.deselectGallery}
          />
        }/>
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
  return bindActionCreators({fetchGalleries, chooseGallery, deselectGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
