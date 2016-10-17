import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from 'react-router';


import App from './components/app';
import mainPage from './components/mainpage';
import Science from './components/home/science';
import Data from './components/home/data';
import AboutUs from './components/home/aboutUs';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={mainPage}/>
        <Route path="/science" component={Science} />
        <Route path="/data" component={Data} />
        <Route path="/aboutus" component={AboutUs} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
