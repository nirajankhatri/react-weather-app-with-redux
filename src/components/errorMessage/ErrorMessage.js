import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./errorMessage.css";
import { useDispatch } from "react-redux";
import { currentWeatherAction } from "../../redux/actions/weatherActions";

const ErrorMessage = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="fetchError">
      <p>
        <span>{props.errorMessage}</span>

        <FontAwesomeIcon
          icon={faX}
          onClick={() => dispatch(currentWeatherAction("Kathmandu"))}
        />
      </p>
    </div>
  );
};

export default ErrorMessage;
