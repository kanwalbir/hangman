import React, { Component } from "react";
import Letter from "./Letter";
import "./Hangman.css";
import hangman0 from "./images/Hangman-0.png";
import hangman1 from "./images/Hangman-1.png";
import hangman2 from "./images/Hangman-2.png";
import hangman3 from "./images/Hangman-3.png";
import hangman4 from "./images/Hangman-4.png";
import hangman5 from "./images/Hangman-5.png";
import hangman6 from "./images/Hangman-6.png";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const words = ["RUN FOREST RUN", "HELLO HANGMAN", "RUBY ON RAILS", "PYTHON"];
let gameWord = words[Math.floor(words.length * Math.random())].split("");

const initialState = {
  guess: ["", "", "", "", "", "", "", "", "", ""],
  potentialTries: 6
};

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleResetGame(event) {
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

  handleLetterClick(idx) {
    console.log(alphabet[idx]);
    // this.setState(initialState);
  }

  render() {
    let game = gameWord.map(chr => {
      return <span> ____ </span>;
    });
    let letters = alphabet.map((chr, idx) => {
      return (
        <Letter
          key={idx}
          chr={chr}
          handleClick={this.handleLetterClick.bind(this, idx)}
        />
      );
    });
    return (
      <div>
        <h3>Clue: {gameWord}</h3>
        {game}
        <div class="flex-container">{letters}</div>
        <input
          onClick={this.handleResetGame}
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
