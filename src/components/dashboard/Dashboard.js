import React from "react";
import Card from "../card/Card";
import Nav from "../nav/Nav";

const toLocalTime = (unix) => {
  var d = new Date(unix * 1000);
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var time = hour + ':' + min + ':' + sec ;
  return time;
}

const Modal = (props) => {
  return (
    <div className="dashboard">
      <Nav />
      <div className="cards" id="weather-cards"></div>
      <div className="highlights">
        <h2 className="heading">today's highlights</h2>
        <div className="cards">
          <Card title="Wind Status" data={props.wind.deg} status={props.wind.speed} />
          <Card title="Visibility" data={props.visibility} status="" />
          <Card title="Sunrise" data={toLocalTime(props.sun.rise)} status="" />
          <Card title="Humidity" data={props.humidity} status="" />
          <Card title="Pressure" data={props.pressure} status="" />
          <Card title="Sunset" data={toLocalTime(props.sun.set)} status="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
