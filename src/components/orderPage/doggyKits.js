import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import doggyKitPhoto from '../../../styles/assets/doggykit.png';

class OrderDoggyKit extends Component {
  constructor(props){
    super(props);
    //initalize local state 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.props.onUserInput(
      this.refs.textInput.value
    );
  }

  render(){
    return(
      <form className="col-md-6">
        <img className='kitPhoto' src={doggyKitPhoto} />
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