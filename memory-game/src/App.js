import React, {Component} from "react";
import MarvelCard from "./components/MarvelCards";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import ModalItem from "./components/Modal";
import ModalWinItem from "./components/ModalWin";
import Footer from "./components/Footer";
import chars from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    chars,
    clickedCards: [],
    score: 0,
    topScore: 0
  };

  clickFunctions = id => {
    this.track(id);
    this.randomize();
    this.ultWin();
  }

  track = id => {
    console.log("id: " + id)
    if (this.state.clickedCards.indexOf(id) !== -1) {
      this.setState({ score : 0 })
      console.log("this has been clicked before")
      this.setState({ clickedCards : [] })
    } else {
      this.setState({ clickedCards : [...this.state.clickedCards, id] });
      this.setState({ score : this.state.score + 1 })
      console.log("this is a new click")
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore : this.state.topScore +1 })
      }
    }
  }

  randomize = () => {
    const chars = this.state.chars.sort((a, b) => { return 0.5 - Math.random() });
    this.setState({ chars });
  }

  ultWin = () => {
  if (this.state.topScore === 11) {
    this._child.onOpenModal();
    this.setState({ score : 0 });
    this.setState({ topScore : 0 });
    this.setState({ clickedCards : [] });
    }
  }

  render() {
    return (
      <div >
      <Navigation>
      <ModalItem / >
      </Navigation>
      <ModalWinItem
      ref = {(child) => { this._child = child; }}
      / >
      <p className="scores-text text-center mt-4"> Score: { this.state.score } | Top Score: { this.state.topScore }</p>
      <Wrapper>
      { this.state.chars.map(chars => (
          <
          MarvelCard
          sortCards = { this.clickFunctions }
          id = { chars.id }
          key = { chars.id }
          name = { chars.name }
          image = { chars.image }
          />
        ))
      } </Wrapper>
      <Footer / >
      </div>
    );
  }
}

export default App;
