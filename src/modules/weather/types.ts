import { REQUEST_STATUS } from "../../core/api/types.ts";
export interface Coordinates {
  lat: number;
  lon: number;
}

// interface WeatherInfo {
//   description: string;
// }

export interface CurrentWeather {
  temp: number | null;
  feels_like: number | null;
  weather: [
    {
      description: string | null;
    }
  ] | null;
}

interface HourlyWeather {
  dt: number;
  temp: number;
  feels_like: number;
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
}

interface DailyWeather {
  dt: number;
  temp: {
    eve: number;
  };
  feels_like: {
    eve: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
}
interface ForecastWeather {
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

export interface Weather {
  current: CurrentWeather | null;
  forecast: ForecastWeather | null;
}

export interface WeatherState extends Weather {
  status: REQUEST_STATUS;
}
