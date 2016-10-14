import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';


import App from './components/app';
import mainPage from './components/mainpage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
