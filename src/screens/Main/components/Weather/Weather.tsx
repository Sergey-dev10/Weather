import { useAppSelector } from "../../../../hooks";
import { Current } from "./components/Current";
import { selectWeatherStatus } from "../../../../modules/weather/selectors.ts";
import { REQUEST_STATUS } from "../../../../core/api/types.ts";
import { Forecast } from "./components/Forecast";
export const Weather = () => {
  const weatherStatus = useAppSelector(selectWeatherStatus);
  return (
    <>
      {weatherStatus === REQUEST_STATUS.SUCCESS ? (
        <>
          <Current />
          <Forecast />
        </>
      ) : (
        ""
      )}
    </>
  );
};
