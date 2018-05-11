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
  "PYTHON"
];
const potentialTries = 6;

function selectWord() {
  let i = Math.floor(choiceOfWords.length * Math.random());
  return choiceOfWords[i].split("");
}

function createInitialState() {
  let initialState = {
    potentialTries: potentialTries,
    displayWord: "",
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
  return initialState;
}

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = createInitialState();
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleResetGame(event) {
    event.preventDefault();
    this.setState(createInitialState());
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

  handleLetterClick(idx, chr) {
    // console.log(this.state.alphabet[idx][0], this.state.alphabet[idx][1]);
    this.setState(prevState => {
      let newAlpha = [...this.state.alphabet];
      newAlpha[idx][1] = false;
      return { alphabet: newAlpha };
    });
  }

  render() {
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
          <img src={hangman0} />
        </div>
      </div>
    );
  }
}

export default Hangman;
