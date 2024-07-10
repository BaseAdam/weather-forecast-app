import { createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../types/weatherData";

interface CityState {
    city: {
        location: {
            name: string
        },
        current: WeatherData
    } | null
    cityToCompare: string
}

export const citySlice = createSlice({
    name: "city",
    initialState: {
        city: null,
        cityToCompare: ""
    } as CityState,
    reducers: {
        setCity: (state, action: { payload: { location: {name: string}; current: WeatherData } | null}) => {
            state.city = action.payload;
        },
    },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;