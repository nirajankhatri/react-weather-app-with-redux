import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <form className="search" id="search">
          <input type="text" id="query" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="weather-icon">
          <img id="icon" src="icons/sun/4.png" alt="" />
        </div>
        <div className="temperature">
          <h1 id="temp">0</h1>
          <span className="temp-unit">°C</span>
        </div>
        <div className="date-time">
          <p id="date-time">Monday, 12:00</p>
        </div>
        <div className="divider"></div>
        <div className="condition-rain">
          <div className="condition">
            <i className="fas fa-cloud"></i>
            <p id="condition">condition</p>
          </div>
          <div className="rain">
            <i className="fas fa-tint"></i>
            <p id="rain">perc - 0%</p>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="location-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="location-text">
          <p id="location">location</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
