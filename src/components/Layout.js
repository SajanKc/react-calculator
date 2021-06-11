import React from "react";
import "./layout.css";
import Output from "./Output";

const Layout = () => {
  const handleClick = () => {};
  return (
    <div className="frame">
      <div className="calculator">
        <Output />
        <p className="title">Sajan Kc's Calculator</p>
        <div className="keys">
          <input
            type="button"
            className="button clear"
            onChange={handleClick}
            value={"C"}
          />
          <input
            type="button"
            className="button clear"
            onChange={handleClick}
            value={"DEL"}
          />
          <input
            type="button"
            className="button operator"
            onChange={handleClick}
            value={"%"}
          />
          <input
            type="button"
            className="button operator"
            onChange={handleClick}
            value={"/"}
          />
          <br />

          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"7"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"8"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"9"}
          />
          <input
            type="button"
            className="button operator"
            onChange={handleClick}
            value={"X"}
          />
          <br />

          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"4"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"5"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"6"}
          />
          <input
            type="button"
            className="button operator"
            onChange={handleClick}
            value={"-"}
          />
          <br />

          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"1"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"2"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"3"}
          />
          <input
            type="button"
            className="button operator"
            onChange={handleClick}
            value={"+"}
          />
          <br />

          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"0"}
          />
          <input
            type="button"
            className="button"
            onChange={handleClick}
            value={"."}
          />
          <input
            type="button"
            className="button operator equal"
            onChange={handleClick}
            value={"="}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
