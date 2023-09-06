import axios from 'axios';


const PLACE_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
export const getPlaces = (searchQuery: string) => {
    return axios.get(PLACE_BASE_URL, {
        params: {
            q: searchQuery,
            appid: "70a7e54e3b54932247ad27262b24a8ce",
            limit: 10,
        },
    }).then(response => response.data);
};