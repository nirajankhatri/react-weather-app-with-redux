import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faCloud,
  faLocation,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { currentWeatherAction } from "../../redux/actions/weatherActions";

const toLocalDateTime = (unix) => {
  var d = new Date(unix * 1000);
  var dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = dayArr[d.getDay()];
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var time = day + ", " + " " + hour + ":" + min + ":" + sec;
  return time;
};

const Sidebar = (props) => {
  const [city, setCity] = useState(props.city);

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (city.trim() !== "") {
      dispatch(currentWeatherAction(city));
    } else {
      document.getElementsByClassName('cityInput')[0].classList.add("error");
      document
        .getElementsByClassName("errorMessage")[0]
        .classList.add("errorMessage--show");
    }
  };

  const inputChangeHandler = (e) => {
    setCity(e.target.value);
    document.getElementsByClassName('cityInput')[0].classList.remove("error");
    document
      .getElementsByClassName("errorMessage")[0]
      .classList.remove("errorMessage--show");
  };

  return (
    <div className="sidebar">
      <div>
        <form className="search" id="search" onSubmit={formSubmitHandler}>
          <input
            type="text"
            id="query"
            className="cityInput"
            placeholder="Search..."
            onChange={inputChangeHandler}
            value={city}
            autocomplete="off"
          />
          <button onClick={formSubmitHandler}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="errorMessage">Please enter a task</div>

        <div className="temperature">
          <h1 id="temp">{props.temperature.temp}</h1>
          <span className="temp-unit">°{props.temperature.unit}</span>
        </div>
        <div className="date-time">
          <p id="date-time">{toLocalDateTime(props.time)}</p>
        </div>
        <div className="divider"></div>
        <div className="condition-rain">
          <div className="condition">
            <FontAwesomeIcon icon={faCloud} />
            <p id="condition">{props.sky.main}</p>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="location-icon">
          <FontAwesomeIcon icon={faLocation} />
        </div>
        <div className="location-text">
          <p id="location">{props.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
