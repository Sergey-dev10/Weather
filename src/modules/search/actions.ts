import { createAction } from "@reduxjs/toolkit";

export const searchStart = createAction(
  "search/searchStart",
  (searchQuery: string) => ({ payload: searchQuery }),
);
