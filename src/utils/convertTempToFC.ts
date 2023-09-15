export const convertTempToFC = (temp, unit) => {
    if (unit === "F") {
        return Math.round(((temp - 273.15) * 9) / 5 + 32) + "°F"
    }
    return Math.round(temp - 273.15) + "°C";
}