import React, { useEffect, useState } from "react";
import { Box, InputAdornment } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { searchStart } from "../../../../modules/search/actions.ts";
import { clearSearchResult } from "../../../../modules/search/slice.ts";
import {
  selectSearchStatus,
  selectPlaces,
} from "../../../../modules/search/selectors.ts";
import { REQUEST_STATUS } from "../../../../core/api/types.ts";
import { debounce } from "debounce";
import { FormControlWrapper, SearchInput } from "./Search.styles.ts";
import { LocationsList } from "./components/LocationsList";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [isClearIcon, setIsClearIcon] = useState(false);
  const dispatch = useAppDispatch();
  const places = useAppSelector(selectPlaces);
  const searchStatus = useAppSelector(selectSearchStatus);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsClearIcon(true);
    dispatch(clearSearchResult());
  };

  const clearSearch = debounce(() => {
    setIsClearIcon(false);
    dispatch(clearSearchResult());
  }, 600);

  const startSearch = debounce((searchQuery: string) => {
    if (searchQuery.trim()) {
      dispatch(searchStart(searchQuery));
    }
  }, 100);

  const handleClear = () => {
    setSearch("");
    setIsClearIcon(false);
  };

  useEffect(() => {
    const searchQuery = search.trim();
    if (!searchQuery) {
      clearSearch();
      return;
    }
    if (searchQuery) {
      startSearch(searchQuery);
    }
    return () => {
      dispatch(clearSearchResult());
    };
  }, [search]);

  return (
    <Box>
      <FormControlWrapper sx={{ display: "flex" }}>
        <SearchInput
          sx={{ width: "100%" }}
          placeholder="Enter the name of your location"
          value={search}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
            endAdornment: isClearIcon ? (
              <InputAdornment position="end" onClick={handleClear}>
                <ClearIcon />
              </InputAdornment>
            ) : (
              ""
            ),
          }}
        />

        {searchStatus === REQUEST_STATUS.SUCCESS &&
        search.length > 0 &&
        places.length > 0 ? (
          <LocationsList places={places} />
        ) : (
          ""
        )}
      </FormControlWrapper>
    </Box>
  );
};
