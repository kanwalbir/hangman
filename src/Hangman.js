import React, { Component } from "react";
import Alphabet from "./Alphabet";
import "./Hangman.css";
import hangman0 from "./images/Hangman-0.png";

const initialState = {
  guess: ["", "", "", "", "", "", "", "", "", ""],
  potentialTries: 6
};

const words = ["HELLO WORLD", "HELLO HANGMAN"];

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState(initialState);
  }

  handleChange(event) {
    let name = event.target.name;
    let val = event.target.value;
    this.setState(prevState => {
      let newGuess = [...prevState.guess];
      newGuess[name] = val;
      return { guess: newGuess };
    });
  }

  render() {
    let display = words[0].split("").map(chr => {
      return <span> ____ </span>;
    });

    return (
      <div>
        <h3>Hello Hangman</h3>
        {display}
        {/* <form onSubmit={this.handleReset}>
          <input
            name="0"
            onChange={this.handleChange}
            value={this.state.guess[0]}
            size="5"
          />
          <input
            name="1"
            onChange={this.handleChange}
            value={this.state.guess[1]}
            size="5"
          />
          <input
            name="2"
            onChange={this.handleChange}
            value={this.state.guess[2]}
            size="5"
          />
          <input
            name="3"
            onChange={this.handleChange}
            value={this.state.guess[3]}
            size="5"
          />
          <input
            name="4"
            onChange={this.handleChange}
            value={this.state.guess[4]}
            size="5"
          />
          <input
            name="5"
            onChange={this.handleChange}
            value={this.state.guess[5]}
            size="5"
          />
          <input
            name="6"
            onChange={this.handleChange}
            value={this.state.guess[6]}
            size="5"
          />
          <input
            name="7"
            onChange={this.handleChange}
            value={this.state.guess[7]}
            size="5"
          />
          <input
            name="8"
            onChange={this.handleChange}
            value={this.state.guess[8]}
            size="5"
          />
          <input
            name="9"
            onChange={this.handleChange}
            value={this.state.guess[9]}
            size="5"
          />
        </form> */}
        <Alphabet />
        <input
          onClick={this.handleReset}
          class="btn"
          type="submit"
          value="Reset Game"
        />
        <div>
          <img src={hangman0} />
        </div>
      </div>
    );
  }
}

export default Hangman;
