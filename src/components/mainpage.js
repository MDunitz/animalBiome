import React from 'react';
import { Component } from 'react';

import AboutUs from './home/aboutUs';
import Quotes from './home/quotes';
import Science from './home/science';
import Data from './home/data';
import AnimalPics from './home/animalPics';
import Top from './home/top'


class mainpage extends Component {

  render() {
    return (
      <div>
        <Top />
        <AnimalPics />
        <Science />
        <Data />
        <Quotes />
        <AboutUs />
      </div>
    );
  };
};

export default mainpage


