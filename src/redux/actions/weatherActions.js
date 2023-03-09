import axios from "axios";
import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAILURE,
} from "../constants/weatherConstants";

const apiKey = "1ed8adbf90879330a8509d4a9be3d222";

export const currentWeatherAction = (city) => async (dispatch) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    dispatch({ type: CURRENT_WEATHER_REQUEST });
    const { data } = await axios.get(url);
    dispatch({ type: CURRENT_WEATHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CURRENT_WEATHER_FAILURE, payload: error });
  }
};
