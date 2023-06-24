"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const theatersApi = createApi({
    reducerPath: "theatersAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getTheaters: builder.query({ query: () => "cinemas" }),
    }),
});

export const { useGetTheatersQuery } = theatersApi;
