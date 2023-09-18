import axios from "axios";

const PLACE_URL = "https://api.openweathermap.org/geo/1.0/direct";
export const getPlaces = (searchQuery: string) => {
  return axios
    .get(PLACE_URL, {
      params: {
        q: searchQuery,
        appid: import.meta.env.VITE_API_KEY,
        limit: 10,
      },
    })
    .then((response) => response.data);
};

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall";

export const getWeather = (lat: number, lon: number) => {
  return axios
    .get(WEATHER_URL, {
      params: {
        lat: lat,
        lon: lon,
        appid: import.meta.env.VITE_API_KEY,
      },
    })
    .then((response) => response.data);
};
