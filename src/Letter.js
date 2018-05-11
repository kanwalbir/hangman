import React from "react";
import "./Letter.css";

const Letter = ({ chr, display, handleClick }) => {
  console.log("inside letter.js", chr, display);
  return (
    <div className={display ? "show" : "hide"} onClick={handleClick}>
      {chr}
    </div>
  );
};

export default Letter;
