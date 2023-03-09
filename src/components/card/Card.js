import React from "react";

const Card = (props) => {
  return (
    <div className="card2">
      <h4 className="card-heading">{props.title}</h4>
      <div className="content">
        <p className="uv-index">{props.data}</p>
        <p className="uv-text">{props.status}</p>
      </div>
    </div>
  );
};

export default Card;
