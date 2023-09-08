import { REQUEST_STATUS } from "../../core/api/types.ts";
export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherState {
  status: REQUEST_STATUS;
  current: CurrentWeather;
  forecast: any;
}

interface CurrentWeather {
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number;
    feels_like: number;
  };
}
