import React from "react";
import "./output.css";
import OutputRow from "./OutputRow";

const Output = () => {
  return (
    <div className="output">
      <OutputRow value={99} />
      <OutputRow value={10001} />
    </div>
  );
};

export default Output;
