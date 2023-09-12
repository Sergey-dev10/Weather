import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState, Place } from "./types";
import { REQUEST_STATUS } from "../../core/api/types.ts";

const initialState: SearchState = {
  result: [],
  status: REQUEST_STATUS.INIT,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSuccess(state, action: PayloadAction<Place[]>) {
      state.status = REQUEST_STATUS.SUCCESS;
      state.result = action.payload;
    },
    clearSearchResult(state) {
      state.status = REQUEST_STATUS.INIT;
      state.result = [];
    },
    failedSearch(state) {
      state.status = REQUEST_STATUS.ERROR;
    },
  },
});

export const { searchSuccess, clearSearchResult, failedSearch } =
  searchSlice.actions;

export default searchSlice.reducer;
