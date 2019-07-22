import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Art extends Component {
  state = { modalShow: false };

  render() {
    // function MyVerticallyCenteredModal(props) {
    //   return (
    //     <Modal
    //       {...props}
    //       size="lg"
    //       aria-labelledby="contained-modal-title-vcenter"
    //       centered
    //     >
    //       <Modal.Header closeButton>
    //         <Modal.Title id="contained-modal-title-vcenter">
    //           Modal heading
    //         </Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <h4>Centered Modal</h4>
    //         <p>
    //           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
    //           ac consectetur ac, vestibulum at eros.
    //         </p>
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button onClick={props.onHide}>Close</Button>
    //       </Modal.Footer>
    //     </Modal>
    //   );
    // }
    const { images, artBio } = this.props.data;
    return (
      <div id="art">
        {/* <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        /> */}
        <h1>
          {" "}
          <b>2D Works</b>{" "}
        </h1>
        <h3> {artBio} </h3>
        <hr style={{ margin: "7%" }} />
        <StackGrid
          columnWidth={300}
          monitorImagesLoaded={true}
          gutterHeight={40}
          gutterWidth={20}
        >
          {images &&
            images.map((image, index) => {
              return (
                <div
                  id="paintings"
                  // onClick={() => {
                  //   this.setState({ modalShow: true });
                  // }}
                >
                  <img src={image.url} alt={image.name} />
                  <div id="overlay">
                    <div id="painting-text">
                      <div id="painting-title">
                        <b>
                          {image.name} <br />
                        </b>
                        <div id="painting-medium"> {image.medium} </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </StackGrid>
      </div>
    );
  }
}

export default Art;
