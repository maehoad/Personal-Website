import React, { Component } from "react";
import Header from "./Components/Header";
import About from "./Components/About";

const data = require("./resumeData.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
  }

  getResumeData() {
    this.setState({ resumeData: data });
  }

  componentDidMount() {
    {
      /* After the component hows up on the screen*/
    }
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        {/* <About data={this.state.resumeData.main} /> */}
      </div>
    );
  }
}

export default App;
