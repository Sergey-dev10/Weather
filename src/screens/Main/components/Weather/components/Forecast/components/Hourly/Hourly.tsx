import { useAppSelector } from "../../../../../../../../hooks";
import { selectForecast } from "../../../../../../../../modules/weather/selectors.ts";
import { Grid } from "@mui/material";
import { WeatherCard } from "../../../../../../../../components/WeatherCard";
import { nanoid } from "@reduxjs/toolkit";
import { timestampToAMPM } from "../../../../../../../../utils/timestampToAMPM.ts";
import { getImage } from "../../../../../../../../utils/getImage.ts";
export const Hourly = () => {
  const forecast = useAppSelector(selectForecast);
  const hourly = forecast?.hourly?.slice(1, 5);
  console.log(hourly);
  return (
    <Grid container spacing={4}>
      {hourly?.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <WeatherCard
            key={nanoid()}
            time={timestampToAMPM(item.dt)}
            temp={item.temp}
            feelsLike={item.feels_like}
            icon={getImage(item.weather[0].icon)}
            description={item.weather[0].description}
          />
        </Grid>
      ))}
    </Grid>
  );
};
