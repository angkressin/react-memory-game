import React, {Component} from "react";
import MarvelCard from "./components/MarvelCards";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import ModalItem from "./components/Modal";
import chars from "./images.json";

class App extends Component {
  state = {
    chars,
  };

  randomize = () => {
    const chars = this.state.chars.sort((a, b) => {
      return 0.5 - Math.random()
    });
    this.setState({
      chars
    });
  }

  trackClicks = id => {
    const clickedArray = this.state.chars.filter(chars => chars.id = id);
    console.log("clicked: " + clickedArray)
  }

  render() {
    return (
      <div >
      <Navigation >
      <ModalItem / >
      </Navigation>
      <Wrapper > {
        this.state.chars.map(chars => (
          <
          MarvelCard
          sortCards = {this.randomize, this.trackClicks}
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
