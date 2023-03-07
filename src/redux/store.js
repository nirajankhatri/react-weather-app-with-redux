import { configureStore } from "@reduxjs/toolkit";
import { currentWeatherReducer } from "./reducers/weatherReducers";

export const store = configureStore({
    reducer: currentWeatherReducer,
})
