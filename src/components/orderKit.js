import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class OrderKit extends Component {
  constructor(props){
    super(props);
    //initalize local state 
    this.handleChangeKitty = this.handleChangeKitty.bind(this);
    this.handleChangeDoggy = this.handleChangeDoggy.bind(this);
    this.state = {doggyKit: 0, kittyKit: 0, cost:0};

  }

  componentDidMount(){}
  //event handler, when user selects a kit or tshirt update state/shopping cart with the new values
  handleChangeKitty(event){
    

    //TODO pass in old state to update
    var doggyCost = this.state.doggyKit * 99;
    console.log("event", this)
    alert("cajknekjfndkjsn")
    var kittyCost = event.target.value * 99 || 0
    var cost = kittyCost + doggyCost
    this.setState({kittyKit: event.target.value, cost: cost})
    console.log(this.state)
    //update shopping cart?
  }
  handleChangeDoggy(event){
    var kittyCost = this.state.kittyKit * 99;
    var doggyCost = event.target.value * 99;
    var cost = kittyCost + doggyCost
    console.log(this.state)
    this.setState({doggyKit: event.target.value, cost: cost})
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("WHOOOP submitted")

    //TODO
      //route to purchase page
      //pass number of both kits to purchase page
  }

  render(){
    return(
      <div>
      <form onsubmit={this.handleSubmit.bind(this)}>
        <h3>Put a picture of the kitty kit here</h3>
        <select  value={this.state.kittyKit} className="kitty">
          <optgroup onSelect={this.handleChangeKitty()}label="Number of kitty kits">
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
        <h3>Put a picture of the doggy kit here</h3>
        <select value={this.state.doggyKit}  className="doggy">
          <optgroup onSelect={this.handleChangeDoggy()}  label="Number of doggy kits">
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
        <button action="submit">Order kits</button>
      </form>
      <div>Total Cost = {this.state.cost}</div>
      </div>
    )
  }
}

export default OrderKit