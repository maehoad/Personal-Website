import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Iframe from "react-iframe";

class Contact extends Component {
  render() {
    const style = {
      width: "300px",
      height: "300px"
    };

    return (
      <div className="google-map">
        <h1> Where Mae is </h1>
        {/* <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 1.352251,
            lng: 103.843087
          }}
          style={style}
        /> */}

        {
          <Iframe
            src="https://www.google.com/maps/d/embed?mid=109HI53N8oVAkNiw0m5gkkHxrdUJWi-4W"
            frameborder="0"
            style="border:5"
            allowfullscreen=""
            width="700px"
            height="450px"
            id="myId"
            display="initial"
            position="relative"
          />
        }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPtGDwVlnV9J6KeNcOxae7yP_-kbVwfxw"
})(Contact);
