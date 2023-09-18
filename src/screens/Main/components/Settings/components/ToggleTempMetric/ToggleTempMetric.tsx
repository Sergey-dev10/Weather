import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../../../hooks";
import { toggleTempMetric } from "../../../../../../modules/weather/slice.ts";
import { TEMP_METRIC } from "../../../../../../modules/weather/types.ts";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { selectTempMetric } from "../../../../../../modules/weather/selectors.ts";

import Switch from "@mui/material/Switch";

export const ToggleTempMetric = () => {
  const dispatch = useAppDispatch();
  const tempMetric = useAppSelector(selectTempMetric);
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(toggleTempMetric(TEMP_METRIC.FAHRENHEIT));
    } else {
      dispatch(toggleTempMetric(TEMP_METRIC.CELSIUS));
    }
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormControlLabel
        control={
          <Switch
            checked={tempMetric === TEMP_METRIC.FAHRENHEIT}
            onChange={handleChange}
          />
        }
        label="Toggle Fahrenheit"
      />
    </FormControl>
  );
};
