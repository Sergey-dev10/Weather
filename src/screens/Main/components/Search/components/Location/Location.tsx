import { ListItemButton, ListItemText } from "@mui/material";
import { LocationProps } from "../../../../../../modules/search/types.ts";
import { useAppDispatch} from "../../../../../../hooks";
import { weatherStart } from "../../../../../../modules/weather/actions.ts";
export const Location = ({ name, lat, lon }: LocationProps) => {
    const dispatch = useAppDispatch();
    const handleChoose = () => {
        dispatch(weatherStart({lat, lon}));
    };
  return (
    <ListItemButton onClick={handleChoose}>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};
