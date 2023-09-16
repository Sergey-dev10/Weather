import { useAppSelector } from "../../../../../../../../hooks";
import { selectForecast } from "../../../../../../../../modules/weather/selectors.ts";
import { Grid } from "@mui/material";
import { WeatherCard } from "../../../../../../../../components/WeatherCard";
import { nanoid } from "@reduxjs/toolkit";
import {timestampToDay} from "../../../../../../../../utils/timestampToDay.ts"
import {convertTempToFC} from "../../../../../../../../utils/convertTempToFC.ts";
import { getImage } from "../../../../../../../../utils/getImage.ts";
import {H2} from "../../../../../../../../common/CommonStyles.styles.ts"

export const Daily = () => {
  const forecast = useAppSelector(selectForecast);
  const daily = forecast?.daily?.slice(0);
  console.log(daily);

  return (
    <>
      <H2>Extended Forecast</H2>
      <Grid container spacing={4}>
        {daily?.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <WeatherCard
              key={nanoid()}
              time={timestampToDay(item.dt)}
              temp={convertTempToFC(item.temp.eve, "C")}
              feelsLike={convertTempToFC(item.feels_like.eve, "C")}
              icon={getImage(item.weather[0].icon)}
              description={item.weather[0].description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
