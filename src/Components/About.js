import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
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
            <p> {bio.projects}</p>
            <p> {bio.women}</p>
            <p> {bio.art} </p>
            <p> {bio.travel}</p>

            <div className="row">
              <div className="columns download">
                <p>
                  <a href={resumeDownload} target="_blank" className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                  <a href={resumeDownload} target="_blank">
                    Contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
