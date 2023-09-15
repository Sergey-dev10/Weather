import { useAppSelector } from "../../../../../../hooks";
import { selectCurrentWeather } from "../../../../../../modules/weather/selectors.ts";
import { Box } from "@mui/material";
import { Description, Temp, FeelsLike } from "./Current.styles.ts";
import { CurrentWeather } from "../../../../../../modules/weather/types.ts";
import {convertTempToFC} from "../../../../../../utils/convertTempToFC.ts";

export const Current = () => {
  const current: CurrentWeather = useAppSelector(selectCurrentWeather);

  const {
    temp,
    feels_like,
    weather: [{ description }],
  } = current;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 200,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Description>{description}</Description>
      <Temp>{convertTempToFC(temp, "C")}</Temp>
      <FeelsLike>Feels Like: {convertTempToFC(feels_like, "C")}</FeelsLike>
    </Box>
  );
};
