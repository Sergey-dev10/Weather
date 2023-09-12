import { createAction } from "@reduxjs/toolkit";
import { Coordinates } from "./types.ts";

export const weatherStart = createAction(
  "weather/weatherStart",
  (coordinates: Coordinates) => ({ payload: coordinates }),
);
