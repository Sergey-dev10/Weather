import { useAppSelector } from "../../../../../../hooks";
import { selectCurrentWeather } from "../../../../../../modules/weather/selectors.ts";
import { Box } from "@mui/material";
import { Description, Temp, FeelsLike, WeatherIcon } from "./Current.styles.ts";
export const Current = () => {
  const current = useAppSelector(selectCurrentWeather);

  const {
    weather: [{ description }],
    main: { temp, feels_like },
  } = current;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 200,
        marginTop: 10,
      }}
    >
      <Description>{description}</Description>
      <Temp>{temp}</Temp>
      <FeelsLike>Feels Like: {feels_like}</FeelsLike>
    </Box>
  );
};
