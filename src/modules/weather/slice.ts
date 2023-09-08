import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {REQUEST_STATUS} from "../../core/api/types.ts";
import {Coordinates} from "./types.ts";


const initialState = {
    status: REQUEST_STATUS.INIT,
    current: [],
    forecast: [],
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        weatherStart(state, action: PayloadAction<Coordinates>) {
            state.status = REQUEST_STATUS.LOADING;
        },
        weatherSuccess(state, action) {
            state.status = REQUEST_STATUS.SUCCESS;
            state.current = action.payload.current;
            state.forecast = action.payload.forecast;
        },
        clearWeather(state) {
            state.status = REQUEST_STATUS.INIT;
            state.current = [];
            state.forecast = [];
        }
    },
});

export const {weatherStart, weatherSuccess, clearWeather} = weatherSlice.actions;
export default weatherSlice.reducer;