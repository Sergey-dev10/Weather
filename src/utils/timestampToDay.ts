export const timestampToDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("en-US", { weekday: "long" });
};