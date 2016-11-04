import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import logo from "../../styles/assets/abLogo.png";


class Header extends Component {

  render(){
    return(
      <div>
        <div className="headerDiv">
          <div className="logoDiv">
            <Link to="/" activeClassName="active">
              <img className="logo" src={logo}/>
            </Link>
          </div>
          <ul className="header">
            <li><a href="https://catbiome.wordpress.com/" activeClassName="active">Blog</a></li>
            <li><Link to="/#howitworks" activeClassName="active">How It Works</Link></li>
            <li><a href='http://codap.concord.org/releases/latest/static/dg/en/cert/index.html#shared=15599' activeClassName="active">KittyBiome Data</a></li>
            <li><Link to="/#aboutus" activeClassName="active">About Us</Link></li>
            <li><a href='https://animal-biome.myshopify.com/collections/all' activeClassName="active">Order a Kit</a></li>
            <li><div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div></li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Header

