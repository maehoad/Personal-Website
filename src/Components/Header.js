import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <h3>{network.name} </h3>
            </a>
          </li>
        );
      });
    }

    return (
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="current">
            <Link to="Home"> Home</Link>
          </li>
          <li>
            <Link to="About"> About</Link>
          </li>
          <li>
            <Link to="Resume"> Resume</Link>
          </li>
          <li>
            <Link to="Art"> Art</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
