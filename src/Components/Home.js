import React, { Component } from "react";

class Home extends Component {
  render() {
    const { name, occupation, description, city, networks } = this.props.data;
    return (
      <div id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              I'm from {city} and <span>{occupation}</span>. <br />{" "}
              {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
