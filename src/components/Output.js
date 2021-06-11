import React from "react";
import "./output.css";
import OutputRow from "./OutputRow";

const Output = (props) => {
  return (
    <div className="output">
      <OutputRow value={props.answer} />
      <OutputRow value={props.inputedValue} />
    </div>
  );
};

export default Output;
