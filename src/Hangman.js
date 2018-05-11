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

const choiceOfWords = [
  "RUN FOREST RUN",
  "HELLO HANGMAN",
  "RUBY ON RAILS",
  "PYTHON",
  "DJANGO UNCHAINED",
  "MACHINE LEARNING"
];
const potentialTries = 6;

function selectWord() {
  let i = Math.floor(choiceOfWords.length * Math.random());
  return choiceOfWords[i].split("");
}

function createInitialState() {
  let initialState = {
    potentialTries: potentialTries,
    displayImage: hangman0,
    alphabet: [
      ["A", true],
      ["B", true],
      ["C", true],
      ["D", true],
      ["E", true],
      ["F", true],
      ["G", true],
      ["H", true],
      ["I", true],
      ["J", true],
      ["K", true],
      ["L", true],
      ["M", true],
      ["N", true],
      ["O", true],
      ["P", true],
      ["Q", true],
      ["R", true],
      ["S", true],
      ["T", true],
      ["U", true],
      ["V", true],
      ["W", true],
      ["X", true],
      ["Y", true],
      ["Z", true]
    ]
  };
  initialState.gameWord = selectWord();
  initialState.displayWord = new Array(initialState.gameWord.length).fill(" ");
  return initialState;
}

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = createInitialState();
    this.handleResetGame = this.handleResetGame.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleResetGame(event) {
    event.preventDefault();
    this.setState(createInitialState());
  }

  handleLetterClick(idx, chr) {
    this.state.gameWord.forEach((val, idx) => {
      if (chr === val) {
        this.state.displayWord[idx] = this.state.gameWord[idx];
      }
    });
    console.log(this.state.gameWord);
    console.log(this.state.displayWord);
    this.setState(prevState => {
      let newAlpha = [...this.state.alphabet];
      newAlpha[idx][1] = false;
      let newImg =
        "hangman" + (potentialTries - this.state.potentialTries).toString();
      console.log(newImg);
      return { alphabet: newAlpha, displayImage: newImg };
    });
  }

  render() {
    console.log(this.state);
    let letters = this.state.alphabet.map((arr, idx) => {
      return (
        <Letter
          key={idx}
          chr={arr[0]}
          display={arr[1]}
          handleClick={this.handleLetterClick.bind(this, idx, arr[0], arr[1])}
        />
      );
    });
    let game = this.state.gameWord.map(chr => {
      return <span> ____ </span>;
    });

    return (
      <div>
        <h3>Clue: {this.state.gameWord}</h3>
        {game}
        <div className="flex-container">{letters}</div>
        <input
          onClick={this.handleResetGame}
          className="btn"
          type="submit"
          value="Reset Game"
        />
        <div>
          <img src={this.state.displayImage} />
        </div>
      </div>
    );
  }
}

export default Hangman;
