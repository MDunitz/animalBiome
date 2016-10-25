import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class OrderKit extends Component {
  constructor(props){
    super(props);
    //initalize local state 
    this.state = {doggyKit: 0, kittyKit: 0, tShirt: {count:0, size:[]}};
  }
  //event handler, when user selects a kit or tshirt update state/shopping cart with the new values
  handleChange(event){
    //TODO pass in old state to update 
    this.setState({})
  }

  render(){
    
  }
}