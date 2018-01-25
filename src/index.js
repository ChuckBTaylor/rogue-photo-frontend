import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import galleryReducer from './reducers/galleryReducer';
import userReducer from './reducers/userReducer';
import photographerReducer from './reducers/photographerReducer'


const rootReducer = combineReducers({users: userReducer, galleries: galleryReducer, photographers: photographerReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Route path='/' render={props => (<App {...props} store={store} />)} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
