import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../core/api/types.ts";
import { Weather, WeatherState, TEMP_METRIC } from "./types.ts";

const initialState: WeatherState = {
  status: REQUEST_STATUS.INIT,
  tempMetric: TEMP_METRIC.CELSIUS,
  current: {
    weather: [],
  },
  forecast: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherSuccess(state, action: PayloadAction<Weather>) {
      state.status = REQUEST_STATUS.SUCCESS;
      state.current = action.payload.current;
      state.forecast = action.payload.forecast;
    },
    clearWeather(state) {
      state.status = REQUEST_STATUS.INIT;
      state.current = {
        weather: [],
      };
      state.forecast = {};
    },
    toggleTempMetric(state, action: PayloadAction<TEMP_METRIC>) {
      state.tempMetric = action.payload;
    },
  },
});

export const { weatherSuccess, clearWeather, toggleTempMetric } =
  weatherSlice.actions;
export default weatherSlice.reducer;
