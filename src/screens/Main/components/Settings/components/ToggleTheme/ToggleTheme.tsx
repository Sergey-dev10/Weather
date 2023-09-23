import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../../hooks";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Theme } from "../../../../../../modules/theme/types.ts";
import { toggleTheme } from "../../../../../../modules/theme/slice.ts";

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    if (newCheckedValue) {
      dispatch(toggleTheme(Theme.LIGHT));
    } else {
      dispatch(toggleTheme(Theme.DARK));
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const theme = storedTheme as Theme;
      dispatch(toggleTheme(theme));
      setIsChecked(storedTheme === Theme.LIGHT);
    }
  }, [dispatch]);

  return (
    <FormControl component="fieldset" variant="standard">
      <FormControlLabel
        control={<Switch checked={isChecked} onChange={handleChange} />}
        label="Toggle Light Theme"
      />
    </FormControl>
  );
};
