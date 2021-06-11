import React from "react";
import "./outputRow.css";

const OutputRow = (props) => {
  return (
    <div className="result">
      <input type="text" className="screen" readOnly value={props.value} />
    </div>
  );
};

export default OutputRow;
