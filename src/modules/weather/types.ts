import { REQUEST_STATUS } from "../../core/api/types.ts";
export interface Coordinates {
  lat: number;
  lon: number;
}

interface WeatherInfo {
  description: string;
  icon: string;
}
export interface CurrentWeather {
  temp?: number;
  feels_like?: number;
  weather: WeatherInfo[];
}

interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  weather: WeatherInfo[];
}

interface Daily {
  dt: number;
  temp: {
    eve: number;
  };
  feels_like: {
    eve: number;
  };
  weather: WeatherInfo[];
}
interface ForecastWeather {
  hourly?: Hourly[];
  daily?: Daily[];
}

export interface Weather {
  current: CurrentWeather;
  forecast: ForecastWeather;
}

export interface WeatherState extends Weather {
  status: REQUEST_STATUS;
}
