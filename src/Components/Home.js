import React, { Component } from "react";

class Home extends Component {
  render() {
    const {
      name,
      occupation,
      description,
      city,
      networks,
      bio
    } = this.props.data;
    var profilepic = "images/" + this.props.data.image;
    return (
      <div id="home page">
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
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Mae Hoad Profile Pic"
              />
            </div>

            <div className="three columns">{/* stuff */}</div>

            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio.intro}</p>

              <h2>More About Mae</h2>
              <p> {bio.projects}</p>
              <p> {bio.women}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
