import { nanoid } from "@reduxjs/toolkit";
import { List } from "@mui/material";
import { Place } from "../../../../../../modules/search/types.ts";
import { Location } from "./components/Location";
import { LocationsWrapper } from "./LocationsList.styles.ts";

export const LocationsList = ({ places }: { places: Place[] }) => {
  return (
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
                />
              );
            })
          : ""}
      </List>
    </LocationsWrapper>
  );
};
