import React, { Component } from "react";
import StackGrid from "react-stack-grid";

class Art extends Component {
  render() {
    const { images } = this.props.data;
    return (
      <StackGrid columnWidth={150}>
        {images &&
          images.map((image, index) => {
            return (
              <img src={image.url} width={150} height={150} alt={image.name} />
            );
          })}
      </StackGrid>
    );
  }
}

export default Art;
