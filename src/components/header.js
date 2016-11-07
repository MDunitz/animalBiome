import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-scroll';
import logo from "../../styles/assets/abLogo.png";


class Header extends Component {

  render(){
    return(
      <div className="headerDiv">
        <div className="logoDiv">
          <Link to="/" activeClassName="active">
            <img className="logo" src={logo}/>
          </Link>
          <ul className="header">
            <li><a target="_blank" href="https://catbiome.wordpress.com/" activeClassName="active">Blog</a></li>
            <li><HashLink to="#howitworks" activeClassName="active">How It Works</HashLink></li>
            <li><a target="_blank" href='http://codap.concord.org/releases/latest/static/dg/en/cert/index.html#shared=15599' activeClassName="active">KittyBiome Data</a></li>
            <li><HashLink to="#aboutus" activeClassName="active">About Us</HashLink></li>
            <li><a target="_blank" href='https://animal-biome.myshopify.com/collections/sampling-kits' activeClassName="active">Order a Kit</a></li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Header



//<li><div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div></li>


