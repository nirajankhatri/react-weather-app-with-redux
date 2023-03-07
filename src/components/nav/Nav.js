import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="options">
        <button className="hourly">today</button>
        <button className="week active">week</button>
      </ul>
      <ul className="options units">
        <button className="celcius active">°C</button>
        <button className="fahrenheit">°F</button>
      </ul>
    </nav>
  );
};

export default Nav;
