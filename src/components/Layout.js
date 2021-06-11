import React, { useState } from "react";
import "./layout.css";
import Output from "./Output";

const Layout = (props) => {
  let [input, setInput] = useState("0");
  let [result, setResult] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === "=") {
      if (input !== "") {
        let res = "";

        res = new Function("return " + input);

        console.log(res);
        if (res === undefined) {
          setResult("Math error");
        } else {
          setResult(input + "=");
          setInput(res);
        }
      }
    } else if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "DEL") {
      let str = input;
      str = str.substr(0, str.length - 1);
      setInput(str);
    } else if (input === "0") {
      setInput(value);
    } else {
      setInput((input += value));
    }
  };
  return (
    <div className="frame">
      <div className="calculator">
        <Output inputedValue={input} answer={result} />
        <p className="title">Sajan Kc's Calculator</p>
        <div className="keys">
          <input
            type="button"
            className="button clear"
            onClick={handleClick}
            value={"C"}
          />
          <input
            type="button"
            className="button clear"
            onClick={handleClick}
            value={"DEL"}
          />
          <input
            type="button"
            className="button operator"
            onClick={handleClick}
            value={"%"}
          />
          <input
            type="button"
            className="button operator"
            onClick={handleClick}
            value={"/"}
          />
          <br />

          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"7"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"8"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"9"}
          />
          <input
            type="button"
            className="button operator"
            onClick={handleClick}
            value={"*"}
          />
          <br />

          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"4"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"5"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"6"}
          />
          <input
            type="button"
            className="button operator"
            onClick={handleClick}
            value={"-"}
          />
          <br />

          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"1"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"2"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"3"}
          />
          <input
            type="button"
            className="button operator"
            onClick={handleClick}
            value={"+"}
          />
          <br />

          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"0"}
          />
          <input
            type="button"
            className="button"
            onClick={handleClick}
            value={"."}
          />
          <input
            type="button"
            className="button operator equal"
            onClick={handleClick}
            value={"="}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
