import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index.ts";
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
    searchStart(state, action: PayloadAction<string>) {
      state.status = REQUEST_STATUS.LOADING;
    },
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

export const { searchStart, searchSuccess, clearSearchResult, failedSearch } =
  searchSlice.actions;
export const selectPlaces = ({ search }: RootState): Place[] => search.result;
export const selectSearchStatus = ({ search }: RootState): REQUEST_STATUS =>
  search.status;
export default searchSlice.reducer;
