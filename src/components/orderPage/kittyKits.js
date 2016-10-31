import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import kittyKitPhoto from '../../../styles/assets/kittykit.png';

class OrderKittyKit extends Component {
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
      <form className="col-md-6" >
        <img className='kitPhoto' src={kittyKitPhoto} />
        <input
          type="text"
          placeholder = "Number of Kitty Kits..."
          value={this.props.kittyKits}
          ref="textInput"
          onChange={this.handleChange}
          />
      </form>
    );
  }
}

export default OrderKittyKit