import React from 'react';
import { Component } from 'react';

import CommentBox from './comment_box';
import CommentList from './comment_list';
import Header from './header';
import MainPage from './mainpage';


export default class App extends Component {
  render() {
    return (
      <div className="header">
        <Header />
        <div className="content">
          {this.props.children}
          <CommentBox />
          <CommentList />
        </div>
      </div>
    );
  }
}