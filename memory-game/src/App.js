import React, { Component } from "react";
import MarvelCard from "./components/MarvelCards";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import ModalItem from "./components/Modal";
import chars from "./images.json";

class App extends Component {
  state = {
    chars,
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const chars = this.state.chars.filter(chars => chars.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ chars });
  };

  // countAndRandom = => {
  //   const characters = this.state.chars.map
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navigation>
        <ModalItem />
        </Navigation>
      <Wrapper>
        {this.state.chars.map(chars => (
          <MarvelCard
            removeFriend={this.removeFriend}
            id={chars.id}
            key={chars.id}
            name={chars.name}
            image={chars.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
