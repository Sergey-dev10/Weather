import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
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
import { nanoid } from "@reduxjs/toolkit";

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
  };
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
      dispatch(clearSearchResult());
    }
    if (searchQuery && !isSelected) {
      dispatch(searchStart(searchQuery));
      setIsClearIcon(true);
    }
    return () => {
      dispatch(clearSearchResult());
    };
  }, [search]);

  return (
    <Stack spacing={2} sx={{ width: 600 }}>
      <FormControl>
        <TextField
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

        <Stack sx={{ height: 600 }}>
          {searchStatus === REQUEST_STATUS.SUCCESS ? (
            <List>
              {places.length
                ? places.map((place: Place) => {
                    return (
                      <Location
                        key={nanoid()}
                        name={place.name}
                        onChoose={handleChoose}
                      />
                    );
                  })
                : ""}
            </List>
          ) : (
            ""
          )}
        </Stack>
      </FormControl>
    </Stack>
  );
};
