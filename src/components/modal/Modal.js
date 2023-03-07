import React from "react";
import Card from "../card/Card";
import Nav from "../nav/Nav";

const Modal = () => {
  return (
    <div className="modal">
      <Nav />
      <div className="cards" id="weather-cards"></div>
      <div className="highlights">
        <h2 className="heading">today's highlights</h2>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Modal;
