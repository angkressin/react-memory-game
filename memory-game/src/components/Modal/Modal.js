import React from 'react';
import ReactDOM from 'react-dom'
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
        <button className="btn btn-primary font" onClick={this.onOpenModal}>How to play</button>
        <Modal open={open} onClose={this.onCloseModal} little>
        <h2 className="font">How to play:</h2>
        <p className="font">
          The goal of this game is to reach a Top Score of 12 points.
        </p>
        <ul className="font">
          <li>
          Start by clicking on a Marvel superhero card.
          </li>
          <li>
          Once clicked, the cards will shuffle in a random order.
          <li>You must then click a new card but not a card that you have selected before.
          </li>
          </li>
          <li>If you're next selection is a new card, then your score will go up one.
          </li>
          <li>If it is a card that you have selected before, then your score will go back down to 0.
          </li>
        </ul>
        </Modal>
      </div>
      </div>
    );
  }
}
