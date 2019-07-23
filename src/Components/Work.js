import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {this.props.data.work &&
              this.props.data.work.map((work, index) => {
                return (
                  <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                      {work.title}
                      <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                    <p> {work.info} </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {this.props.data.education &&
                  this.props.data.education.map((education, index) => {
                    return (
                      <div key={index}>
                        <h3>{education.school}</h3>
                        <p className="info">
                          {education.degree} <span>&bull;</span>
                          <em className="date">{education.graduated}</em>
                        </p>
                        <p>{education.description}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
