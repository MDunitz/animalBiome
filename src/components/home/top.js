import React, { Component } from 'react';
const logo = require("../../../style/assets/abLogo.png");


class Top extends Component {
  render(){
    return(
      <div className="row press">
        <img src={logo}/>
        <h1>Learn About Your Furry Friends! <br></br> Advance Animal Health </h1>
      </div>
    );
  };
};


export default Top