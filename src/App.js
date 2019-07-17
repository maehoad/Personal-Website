import React, { Component } from "react";
import { Switch, Router, Route } from "react-router";
import { createBrowserHistory } from "history";

import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Home from "./Components/Home";
import Art from "./Components/Art";

const data = require("./resumeData.json");
const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar"
    };
  }

  // Changed component did mount for functions - was not loading at same time

  render() {
    return (
      <Router history={history}>
        <Header data={data.main} />
        {/* {this.state.home && <Home data={this.state.resumeData.main} />} */}
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => <Home {...props} data={data.main} />}
          />
          <Route
            exact
            path={"/Home"}
            render={props => <Home {...props} data={data.main} />}
          />
          <Route
            exact
            path={"/About"}
            render={props => <About {...props} data={data.main} />}
          />
          <Route
            exact
            path={"/Resume"}
            render={props => <Resume {...props} data={data.resume} />}
          />

          <Route
            exact
            path={"/Art"}
            render={props => <Art {...props} data={data.art} />}
          />
          <Route
            exact
            path={"/Contact"}
            render={props => <Contact {...props} data={data.main} />}
          />
        </Switch>
        <Footer data={data.main} />
      </Router>
    );
  }
}

export default App;
