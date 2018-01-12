import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/general/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        Here is text
        <NavBar />
      </div>
    );
  }
}

export default App;
