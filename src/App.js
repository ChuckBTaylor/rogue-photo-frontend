import React, { Component } from 'react';
import './App.css';
import NavBar from './components/general/NavBar';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer';
import AboutPage from './components/general/AboutPage';
import ContactPage from './components/general/ContactPage';
import DonatePage from './components/general/DonatePage';
import PhotographerContainer from './containers/PhotographerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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
}

export default App;
