import React, {Component} from "react";
import MarvelCard from "./components/MarvelCards";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import ModalItem from "./components/Modal";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
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
      this.setState({score : 0})
      console.log("this has been clicked before")
      this.setState({clickedCards : []})
    } else {
      this.setState({clickedCards : [...this.state.clickedCards, id]});
      this.setState({score : this.state.score + 1})
      console.log("this is a new click")
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore : this.state.topScore +1})
      }
    }
    if (this.state.topScore === 11) {
      Alert.info('Congrats! You won! Closing this alert will restart the game', {
              position: 'top',
              offset: 300,
              effect: 'jelly',
              timeout: 'none',
              onClose: function () {
                this.setState({clickedCards : []});
                this.setState({score : 0})
                this.setState({topScore : 0})
              }
          });
    }
  }

  ultWin = () => {
  }

  randomize = () => {
    const chars = this.state.chars.sort((a, b) => {return 0.5 - Math.random()});
    this.setState({chars});
  }

  render() {
    return (
      <div >
      <Navigation>
      <ModalItem / >
      </Navigation>
      <p className="scores-text text-center mt-4"> Score: {this.state.score} | Top Score: {this.state.topScore}</p>
      <Wrapper >
      {this.state.chars.map(chars => (
          <
          MarvelCard
          sortCards = {this.clickFunctions}
          id = {chars.id}
          key = {chars.id}
          name = {chars.name}
          image = {chars.image}
          />
        ))
      } </Wrapper>
      </div>
    );
  }
}

export default App;
