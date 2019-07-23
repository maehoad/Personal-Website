import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.location.pathname
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ current: this.props.location.pathname });
    }
  }

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
          <li className={this.state.current === "/Home" && "current"}>
            <Link to="Home"> Home</Link>
          </li>
          <li className={this.state.current === "/About" && "current"}>
            <Link to="About"> About</Link>
          </li>
          <li className={this.state.current === "/Work" && "current"}>
            <Link to="Work"> Work</Link>
          </li>
          <li className={this.state.current === "/Art" && "current"}>
            <Link to="Art"> Art</Link>
          </li>
          <li className={this.state.current === "/Contact" && "current"}>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
