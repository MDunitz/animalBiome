import React from 'react';
import { Component } from 'react';

import AboutUs from './home/aboutUs';
import Quotes from './home/quotes';
import HowItWorks from './home/howItWorks';
import AnimalKits from './home/animalKits';
import Top from './home/top';


class MainPage extends Component {
  render() {
    return (
      <div>
        <Top />
        <AnimalKits />
        <HowItWorks />
        <Quotes />
        <AboutUs />
      </div>
    );
  };
};

export default MainPage


