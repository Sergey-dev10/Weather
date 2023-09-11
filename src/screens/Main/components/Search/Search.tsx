import React, { useEffect, useState } from "react";
import { Box, InputAdornment, List } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  clearSearchResult,
  searchStart,
  selectPlaces,
  selectSearchStatus,
} from "../../../../modules/search/slice.ts";
import { Place } from "../../../../modules/search/types.ts";
import { Location } from "./components/Location";
import { REQUEST_STATUS } from "../../../../core/api/types.ts";
import {Message} from "./components/Message";
import { nanoid } from "@reduxjs/toolkit";
import { debounce } from "debounce";
import {
  FormControlWrapper,
  LocationsWrapper,
  SearchInput,
} from "./Search.styles.ts";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [isClearIcon, setIsClearIcon] = useState(false);
  const dispatch = useAppDispatch();
  const places = useAppSelector(selectPlaces);
  const searchStatus = useAppSelector(selectSearchStatus);
  const [isSelected, setIsSelected] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsSelected(false);
    setIsClearIcon(true);
    dispatch(clearSearchResult());
  };

  const clearSearch = debounce(() => {
    setIsSelected(false);
    setIsClearIcon(false);
    dispatch(clearSearchResult());
  }, 600);

  const startSearch = debounce((searchQuery: string) => {
    if (searchQuery.trim()) {
      dispatch(searchStart(searchQuery));
    }
  }, 100);

  const handleChoose = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget as HTMLDivElement;
    setSearch(btn.innerText);
    setIsSelected(true);
    dispatch(clearSearchResult());
  };
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
    if (searchQuery && !isSelected) {
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
          sx={{ width: 600 }}
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
        {searchStatus === REQUEST_STATUS.SUCCESS && places.length === 0 ? <Message /> : "" }
        {searchStatus === REQUEST_STATUS.SUCCESS &&
        search.length > 0 &&
        places.length > 0 ? (
          <LocationsWrapper
            sx={{
              width: 600,
            }}
          >
            <List>
              {places.length
                ? places.map((place: Place) => {
                    return (
                      <Location
                        key={nanoid()}
                        name={place.name}
                        lat={place.lat}
                        lon={place.lon}
                        onChoose={handleChoose}
                      />
                    );
                  })
                : ""}
            </List>
          </LocationsWrapper>
        ) : (
          ""
        )}
      </FormControlWrapper>
    </Box>
  );
};
