import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/general/HeaderBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer';
import AboutPage from './components/general/AboutPage';
import ContactPage from './components/general/ContactPage';
import DonatePage from './components/general/DonatePage';
import PhotographerContainer from './containers/PhotographerContainer';
import { fetchGalleries, chooseGallery } from './actions/gallery'
import { get3MostRecent } from './helpers/functions';


class App extends Component {

  render() {
    const recentGalleries = get3MostRecent(Object.values(this.props.galleries))
    return (
      <div className="App">
        <Route path='/' render={props => <HeaderBar {...props} recentGalleries={recentGalleries} chooseGallery={this.props.chooseGallery} />} />
        <Switch>
          <Route path='/galleries' component={GalleryContainer} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/donate' component={DonatePage} />
          <Route path='/photographers' component={PhotographerContainer} />
        </Switch>

      </div>
    );
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
  return bindActionCreators({fetchGalleries, chooseGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
