import { REQUEST_STATUS } from "../../core/api/types.ts";
export interface Place {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface SearchState {
  location: string;
  result: Place[];
  status: REQUEST_STATUS;
}

export interface LocationProps {
  name: string;
  lat: number;
  lon: number;
}
