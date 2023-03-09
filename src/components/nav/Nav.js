import React from "react";

const Nav = (props) => {
  return (
    <nav>
      <ul className="options">
        <button className="hourly active">today</button>
        <button className="week">week</button>
      </ul>
      <ul className="options units">
        <button className="celcius" onClick={() => props.unitChangeHandler("c")} >°C</button>
        <button className="fahrenheit" onClick={() => props.unitChangeHandler("f")} >°F</button>
      </ul>
    </nav>
  );
};

export default Nav;
