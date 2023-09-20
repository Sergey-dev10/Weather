import { nanoid } from "@reduxjs/toolkit";
import { List } from "@mui/material";
import { Place } from "../../../../../../modules/search/types.ts";
import { Location } from "./components/Location";
import { LocationsWrapper } from "./LocationsList.styles.ts";

export const LocationsList = ({ places }: { places: Place[] }) => {
  return (
    <LocationsWrapper>
      <List>
        {places.length
          ? places.map((place: Place) => {
              return (
                <Location
                  key={nanoid()}
                  name={place.name}
                  country={place.country}
                  lat={place.lat}
                  lon={place.lon}
                />
              );
            })
          : ""}
      </List>
    </LocationsWrapper>
  );
};
