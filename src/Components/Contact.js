import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Contact extends Component {
  render() {
    const style = {
      width: "300px",
      height: "300px"
    };

    return (
      <div className="google-map">
        <h1> Where Mae is </h1>
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 1.352251,
            lng: 103.843087
          }}
          style={style}
        />
        <h2> That's where mae is</h2>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPtGDwVlnV9J6KeNcOxae7yP_-kbVwfxw"
})(Contact);
