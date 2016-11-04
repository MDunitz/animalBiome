import React from 'react';
import { Component } from 'react';

import AboutUs from './home/aboutUs';
import Quotes from './home/quotes';
import Science from './home/science';
import Data from './home/data';
import AnimalKits from './home/animalKits';
import Top from './home/top';


class MainPage extends Component {
  render() {
    return (
      <div>
        <Top />
        <AnimalKits />
        <Science />
        <Quotes />
        <AboutUs />
      </div>
    );
  };
};

export default MainPage


