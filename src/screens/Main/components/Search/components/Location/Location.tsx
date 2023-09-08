import { ListItemButton, ListItemText } from "@mui/material";
import { LocationProps } from "../../../../../../modules/search/types.ts";
import { useAppDispatch} from "../../../../../../hooks";
import {weatherStart} from "../../../../../../modules/weather/slice.ts";

export const Location = ({ name, onChoose, lat, lon }: LocationProps) => {
    const dispatch = useAppDispatch();
    const handleChoose = (e) => {
        dispatch(weatherStart({lat, lon}));
        onChoose(e);
    };
  return (
    <ListItemButton onClick={handleChoose}>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};
