import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class OrderDoggyKit extends Component {
  constructor(props){
    super(props);
    //initalize local state 
    this.handleChange = this.handleChange.bind(this);
    console.log("props", this.props)
    console.log("state", this.state)
  }

  handleChange(){
    console.log("state", this.state)
    console.log("event", event)
    this.props.onUserInput(
      this.refs.textInput.value
    );
  }

  render(){
    return(
      <form >
        <h1>Put a picture of the doggy kit here</h1>
        <input
          type="text"
          placeholder = "Number of Doggy Kits..."
          value={this.props.doggyKits}
          ref="textInput"
          onChange={this.handleChange}
          />
      </form>
    );
  }
}

export default OrderDoggyKit