import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../../hooks";
import { toggleTempMetric } from "../../../../../../modules/weather/slice.ts";
import { TEMP_METRIC } from "../../../../../../modules/weather/types.ts";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import Switch from "@mui/material/Switch";

export const ToggleTempMetric = () => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    if (newCheckedValue) {
      dispatch(toggleTempMetric(TEMP_METRIC.FAHRENHEIT));
    } else {
      dispatch(toggleTempMetric(TEMP_METRIC.CELSIUS));
    }
  };

  useEffect(() => {
    const storedTempMetric = localStorage.getItem("tempMetric");
    if (storedTempMetric) {
      const tempMetric = storedTempMetric as TEMP_METRIC;
      dispatch(toggleTempMetric(tempMetric));
      setIsChecked(storedTempMetric === TEMP_METRIC.FAHRENHEIT);
    }
  }, [dispatch]);

  return (
    <FormControl component="fieldset" variant="standard">
      <FormControlLabel
        control={<Switch checked={isChecked} onChange={handleChange} />}
        label="Toggle Fahrenheit"
      />
    </FormControl>
  );
};
