import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.weatherapi.com/v1`,
  }),
  endpoints: (builder) => ({
    getWeatherByParam: builder.query({
      //getting api key from .env file but to simplify use of this app I've hardcoded my own key
      query: (cityName) =>
        `forecast.json?key=${
          process.env.REACT_APP_OPEN_WEATHER_API_KEY || '693b7eb959954dac9b693226240607'
        }&q=${cityName}&days=4&aqi=no&alerts=no&hour=12`,
    }),
  }),
});

export const { useGetWeatherByParamQuery } = weatherApi;
