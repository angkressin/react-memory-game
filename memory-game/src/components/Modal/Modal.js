import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import "./Modal.css";


export default class ModalItem extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="container">
      <div>
        <button className="btn btn-primary font" onClick={this.onOpenModal}>Instructions</button>
        <Modal open={open} onClose={this.onCloseModal} little>
        <h2 className="font">How to play:</h2>
        <p className="font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
        </Modal>
      </div>
      </div>
    );
  }
}
