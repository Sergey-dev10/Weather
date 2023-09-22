import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { selectTheme } from "../../../../../../modules/theme/selectors.ts";
import { Theme } from "../../../../../../modules/theme/types.ts";
import { toggleTheme } from "../../../../../../modules/theme/slice.ts";

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(toggleTheme(Theme.LIGHT));
    } else {
      dispatch(toggleTheme(Theme.DARK));
    }
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormControlLabel
        control={
          <Switch checked={theme === Theme.LIGHT} onChange={handleChange} />
        }
        label="Toggle Light Theme"
      />
    </FormControl>
  );
};
