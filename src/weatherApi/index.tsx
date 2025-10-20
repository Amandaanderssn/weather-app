import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `http://api.weatherapi.com/v1` }),
    endpoints: (builder) => ({
        getLocation: builder.query({
            query: (location) => `/forecast.json?key=${weatherApiKey}&q=${location}&aqi=no`,
        }),
        getOptions: builder.query({
            query: (inputValue) => `/search.json?key=${weatherApiKey}&q=${inputValue}`,
        }),
    })
});

export default weatherApi