import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
const logo = require("../../style/assets/abLogo.png");


class Header extends Component {
  constructor(props){
    super(props)
    this.state = {} 
  }

  render(){
    return (
      <div>
        <h1>Animal Biome</h1>
        <ul className="header">
          <li>
            <Link to="/" activeClassName="active">
              <img src={logo}/>
            </Link>
          </li>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/science" activeClassName="active">Science</Link></li>
          <li><Link to="/data" activeClassName="active">Data</Link></li>
          <li><Link to="/aboutus" activeClassName="active">About Us</Link></li>
          <li><Link to="/orderkit" activeClassName="active">Order a Kit</Link></li>
          <li><Link to="/participants" activeClassName="active">See other Participants</Link></li>
        </ul>
        <div className="content">

        </div>
      </div>
    )
  }
}

export default Header