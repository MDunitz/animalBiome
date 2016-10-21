import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import CommentBox from './comment_box';
import CommentList from './comment_list';
import Header from './header';
import MainPage from './mainpage';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="header">
          <Header />
          <div className="content">
            {this.props.children}
            <CommentBox />
            <CommentList />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}