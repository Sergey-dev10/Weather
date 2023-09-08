import { useAppSelector } from "../../../../../../hooks";
import { selectCurrentWeather } from "../../../../../../modules/weather/selectors.ts";
import { Stack } from "@mui/material";
export const Current = () => {
  const current = useAppSelector(selectCurrentWeather);

  const {
    weather: [{ description, icon }],
    main: { temp, feels_like },
  } = current;
  return (
    <Stack sx={{ width: 300 }}>
      <p>{description}</p>
      <p>{temp}</p>
      <p>{feels_like}</p>
    </Stack>
  );
};
