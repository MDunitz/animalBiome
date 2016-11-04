import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import logo from "../../styles/assets/abLogo.png";


class Header extends Component {

  render(){
    return (
      <div>
        <ul className="header">
          <li className="col-md-2">
            <Link to="/" activeClassName="active">
              <img className="logo" src={logo}/>
            </Link>
          </li>
          <div className="col-md-10">
            <li> </li>
            <li><a href="https://catbiome.wordpress.com/" activeClassName="active">Blog</a></li>
            <li><Link to="/science" activeClassName="active">How It Works</Link></li>
            <li><a href='http://codap.concord.org/releases/latest/static/dg/en/cert/index.html#shared=15599' activeClassName="active">Data</a></li>
            <li><Link to="/aboutus" activeClassName="active">About Us</Link></li>
            <li><a href="https://animal-biome.myshopify.com" activeClassName="active">Order a Kit</a></li>
            <li><a href="https://www.flickr.com/groups/2845269@N23/" activeClassName="active">See other Participants</a></li>
            <li><div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div></li>
          </div>
        </ul>
      </div>
    )
  }
}

export default Header