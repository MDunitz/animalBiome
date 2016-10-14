import React from 'react';
import { Component } from 'react';

import CommentBox from './comment_box';
import CommentList from './comment_list';
import AboutUs from './home/aboutUs';
import Quotes from './home/quotes';
import Header from './header';
import Science from './home/science';
import Data from './home/data';
import AnimalPics from './home/animalPics';
import Top from './home/top';
import mainpage from './mainpage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>WHYNOWORKING???</div>
        <mainpage />
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}