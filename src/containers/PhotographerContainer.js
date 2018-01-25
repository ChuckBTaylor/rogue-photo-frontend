import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import { fetchPhotographers } from '../actions/photographers';
import PhotographerList from '../components/photographerStuff/PhotographerList';

class PhotographerContainer extends Component {
  render(){
    console.log(this.props, "Photgrapher Container Props");
    return(
      <div>
        Photographers
      </div>
    )
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
