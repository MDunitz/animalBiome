import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import OrderDoggyKit from './doggyKits';
import OrderKittyKit from './kittyKits';

class OrderKit extends Component {
  constructor(props){
    super(props);
    //initalize local state 
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("props", this.props)
    this.state = {doggyKits: 0, kittyKits: 0, cost:0};
    console.log("state", this.state);
    this.handleDogUserInput = this.handleDogUserInput.bind(this);
    this.handleCatUserInput = this.handleCatUserInput.bind(this)

  }

  handleDogUserInput(doggyKits){
    let dogCost = (doggyKits)*99;
    let catCost = this.state.kittyKits *99;
    let cost = dogCost + catCost;
    this.setState({
      doggyKits: doggyKits,
      cost: cost
    })
  }
  handleCatUserInput(kittyKits){
    let catCost = (kittyKits) *99;
    let dogCost = this.state.doggyKits*99;
    let cost = catCost + dogCost;
    this.setState({
      kittyKits: kittyKits,
      cost: cost
    })
  }
  handleSubmit(event){
    alert("pooooooooooop")
    console.log("event", event)
    console.log("state", this.state)
    event.preventDefault();
    console.log("WHOOOP submitted")

    //TODO
      //route to purchase page
      //pass number of both kits to purchase page
  }

  render(){
    return(
      <div>
      <form >
        <OrderDoggyKit
         onUserInput={this.handleDogUserInput}
         />
        <OrderKittyKit
        onUserInput={this.handleCatUserInput}
        />
        <br/>
        <br/>
        <button action={this.handleSubmit}>Order kits</button>
      </form>
      <div>Cost = {this.state.cost} </div>
      </div>
    )
  }
}

export default OrderKit