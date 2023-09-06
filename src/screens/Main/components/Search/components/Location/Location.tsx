import { ListItemButton, ListItemText } from "@mui/material";
import { LocationProps } from "../../../../../../modules/search/types.ts";

export const Location = ({ name, onChoose }: LocationProps) => {
  return (
    <ListItemButton onClick={onChoose}>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};
