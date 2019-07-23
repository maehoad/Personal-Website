import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var email = this.props.data.email;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2019 Mae Hoad</li>
              <li>
                Email me at:{" "}
                <a title="email" href="mailto:maehoad@andrew.cmu.edu">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
