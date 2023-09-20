import { ListItemButton, ListItemText } from "@mui/material";
import { LocationProps } from "../../../../../../../../modules/search/types.ts";
import { useAppDispatch } from "../../../../../../../../hooks";
import { weatherStart } from "../../../../../../../../modules/weather/actions.ts";
import { clearSearchResult } from "../../../../../../../../modules/search/slice.ts";
import { setLocation } from "../../../../../../../../modules/search/slice.ts";
export const Location = ({ name, country, lat, lon }: LocationProps) => {
  const dispatch = useAppDispatch();

  const handleSetLocation = () => {
    dispatch(weatherStart({ lat, lon }));
    dispatch(setLocation(`${name}, ${country}`));
    dispatch(clearSearchResult());
  };
  return (
    <ListItemButton onClick={handleSetLocation}>
      <ListItemText primary={`${name}, ${country}`} />
    </ListItemButton>
  );
};
