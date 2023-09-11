import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../core/api/types.ts";
import { Coordinates, Weather, WeatherState } from "./types.ts";

const initialState: WeatherState = {
  status: REQUEST_STATUS.INIT,
  current: null,
  forecast: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherStart(state, action: PayloadAction<Coordinates>) {
      state.status = REQUEST_STATUS.LOADING;
    },
    weatherSuccess(state, action: PayloadAction<Weather>) {
      state.status = REQUEST_STATUS.SUCCESS;
      state.current = action.payload.current;
      state.forecast = action.payload.forecast;
    },
    clearWeather(state) {
      state.status = REQUEST_STATUS.INIT;
      state.current = null;
      state.forecast = null;
    },
  },
});

export const { weatherStart, weatherSuccess, clearWeather } =
  weatherSlice.actions;
export default weatherSlice.reducer;
