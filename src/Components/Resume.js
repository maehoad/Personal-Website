import React, { Component } from "react";

class Resume extends Component {
  render() {
    // if (this.props.data) {
    //   var skillmessage = this.props.data.skillmessage;
    //   var work = this.props.data.work.map(function(work) {
    //     return (
    //       <div key={work.company}>
    //         <h3>{work.company}</h3>
    //         <p className="info">
    //           {work.title}
    //           <span>&bull;</span> <em className="date">{work.years}</em>
    //         </p>
    //         <p>{work.description}</p>
    //       </div>
    //     );
    //   });
    //   var skills = this.props.data.skills.map(function(skills) {
    //     var className = "bar-expand " + skills.name.toLowerCase();
    //     return (
    //       <li key={skills.name}>
    //         <span style={{ width: skills.level }} className={className} />
    //         <em>{skills.name}</em>
    //       </li>
    //     );
    //   });
    // }

    return (
      <section id="resume">
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

export default Resume;
