import React from "react";
import { REQUEST_STATUS } from "../../core/api/types.ts";
export interface Place {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface SearchState {
  result: Place[];
  status: REQUEST_STATUS;
}

export interface LocationProps {
  name: string;
  onChoose: (e: React.MouseEvent<HTMLDivElement>) => void;
  lat: number;
  lon: number;
}
