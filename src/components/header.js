import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
const logo = require("../../styles/assets/abLogo.png");


class Header extends Component {

  render(){
    return (
      <div>
        <ul className="header">
          <li><Link to="/" activeClassName="active">
              <img className="headerImg" src={logo}/></Link></li>
          <li><a href="https://catbiome.wordpress.com/" activeClassName="active">Blog</a></li>
          <li><Link to="/science" activeClassName="active">Science</Link></li>
          <li><Link to="/data" activeClassName="active">Data</Link></li>
          <li><Link to="/aboutus" activeClassName="active">About Us</Link></li>
          <li><a href="https://animal-biome.myshopify.com" activeClassName="active">Order a Kit</a></li>
          <li><a href="https://www.flickr.com/groups/2845269@N23/" activeClassName="active">See other Participants</a></li>
          <li><div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div></li>
        </ul>
      </div>
    )
  }
}

export default Header