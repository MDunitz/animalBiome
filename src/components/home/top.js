import React, { Component } from 'react';
const animalPic = require("../../../styles/assets/catdog.png");


class Top extends Component {
  render(){
    return(
      <div className="top white">
        <img className="top catDogPic" src={animalPic}/>
      </div>
    );
  };
};


export default Top