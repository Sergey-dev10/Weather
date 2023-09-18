import {TEMP_METRIC} from "../modules/weather/types.ts";
export const convertTempToFC = (temp, unit) => {
    if (unit === TEMP_METRIC.FAHRENHEIT) {
        return Math.round(((temp - 273.15) * 9) / 5 + 32) + "°F"
    }
    return Math.round(temp - 273.15) + "°C";
}