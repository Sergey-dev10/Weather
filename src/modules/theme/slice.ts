import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Theme, ThemeState } from "./types.ts";

const initialState: ThemeState = {
  theme: localStorage.getItem("theme") || Theme.DARK,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
