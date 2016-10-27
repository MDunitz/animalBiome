import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class OrderDoggyKit extends Component {
  constructor(props){
    super(props);
    //initalize local state 
    this.handleChange = this.handleChange.bind(this);
    console.log("props", this.props)
    this.state = {doggyKit: 0};
    console.log("state", this.state)
  }

  handleChange(event){
    console.log("state", this.state)
    console.log("event", event)
    this.setState({doggyKit: event.target.value})
  }

  render(){
    return(
      <div>
        <form >
          <h1>Put a picture of the doggy kit here</h1>
          <select className="doggy">
            <optgroup value={this.state.doggyKit} onSelect={this.handleChangeDoggy}   label="Number of doggy kits">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </optgroup>
          </select>
        </form>
      </div>
    )
  }
}

export default OrderDoggyKit