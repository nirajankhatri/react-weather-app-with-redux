import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAILURE,
} from "../constants/weatherConstants";

export const currentWeatherReducer = (
  state = { loading: true, data: {}, error: false },
  action
) => {
  switch (action.type) {
    case CURRENT_WEATHER_REQUEST:
      return { ...state, loading: true };

    case CURRENT_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case CURRENT_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
