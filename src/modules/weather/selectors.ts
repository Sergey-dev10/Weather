import {RootState} from "../index.ts";

export const selectCurrentWeather = ({weather}: RootState) => weather.current;
export const selectForecast = ({weather}: RootState) => weather.forecast;
export const selectWeatherStatus = ({weather}: RootState) => weather.status;