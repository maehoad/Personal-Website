import React, { Component } from "react";
import { getName } from "../server/sw.js";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      person: {}
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const nameCal = await getName();
    console.log(nameCal);
    this.setState({ person: nameCal, loading: false });
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.person.name;
    return <h1> {text} </h1>;
  }
}
export default API;

// OTHER OUT DATED CODE - FROM CODE ACADMEY AND TUTORIALS
// NEW ONE FROM THOMAS
//// fetch (" .... ")
//    .then(async response => {
//   const result = await response.json();
//   console.log(result);
// });
// INSTEAD use await
// await Promise.all([a,b,c])

// fetch("https://swapi.co/api/people/1")
//   .then(
//     response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error("request failed");
//     },
//     networkError => console.log("networkError.message")
//   )
//   .then(jsonResponse => {
//     console.log(jsonResponse);
//     this.setState({ person: jsonResponse, loading: false });
//   });
