import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAILURE,
} from "../constants/weatherConstants";

export const currentWeatherReducer = (
  state = { request: false, data: {}, error: false },
  action
) => {
  switch (action.type) {
    case CURRENT_WEATHER_REQUEST:
      return { ...state, request: true };

    case CURRENT_WEATHER_SUCCESS:
      return { ...state, request: false, data: action.payload };

    case CURRENT_WEATHER_FAILURE:
      return { ...state, request: false, error: action.payload };

    default:
      return state;
  }
};
