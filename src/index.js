import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from 'react-router';


import App from './components/app';
import mainPage from './components/mainpage';
import HowItWorks from './components/home/howItWorks';
// import Data from './components/home/data';
import AboutUs from './components/home/aboutUs';
import reducers from './reducers';

require('../styles/style.css');


const createStoreWithMiddleware = applyMiddleware()(createStore);

//TODO -figure out why deployed app cant go back to /science after leaving animalbiome
//also cant go directly to animalbiome.com/science

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={mainPage}/>
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/aboutus" component={AboutUs} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('main'));
