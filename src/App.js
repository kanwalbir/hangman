import React, { Component } from "react";
import Hangman from "./Hangman";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Hangman</h1>
        </header>
        <Hangman />
      </div>
    );
  }
}

export default App;
