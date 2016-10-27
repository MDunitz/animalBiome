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
    this.state = {cost:0};
    console.log("state", this.state)
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
        <OrderDoggyKit />
        <OrderKittyKit />
        <button action={this.handleSubmit}>Order kits</button>
      </form>
      <div>Cost = {this.state.cost} </div>
      </div>
    )
  }
}

export default OrderKit