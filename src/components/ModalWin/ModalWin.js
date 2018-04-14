import React from 'react';
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal';
import "./ModalWin.css";

export default class ModalWinItem extends React.Component {
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
        <Modal open={open} onClose={this.onCloseModal} little>
        <h2 className="font">Woohoo!</h2>
        <p className="font">
          Congrats! You have great memory and got through all 12 cards without clicking on any more than once.
        </p>
        <p className="font no-margin">
          The game has restarted. Try your skills again!
        </p>
        </Modal>
      </div>
      </div>
    );
  }
}
