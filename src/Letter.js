import React, { Component } from "react";
import "./Letter.css";

const Letter = ({ chr, handleClick }) => {
  return <div onClick={handleClick}>{chr}</div>;
};

export default Letter;
