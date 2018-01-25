import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import { fetchPhotographers } from '../actions/photographers';
import PhotographerList from '../components/photographerStuff/PhotographerList';
import UploadWidget from '../components/cloudinaryStuff/UploadWidget';

class PhotographerContainer extends Component {
  render(){
    return(
      <div>
        Photographers
        <Route exact path='/photographers' render={() => <PhotographerList photographers={this.props.photographers} /> } />
        <UploadWidget />
      </div>
    )
  }

  componentDidMount = () => {
    this.props.fetchPhotographers()
  }
}

const mapStateToProps = state => {
  return {
    photographers: state.photographers.list,
    activePhotographer: state.photographers.activePhotographer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPhotographers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotographerContainer);
