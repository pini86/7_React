"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const movieApi = createApi({
    reducerPath: "movieAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query({ query: () => "movies" }),
        getMovie: builder.query({
            query: (movieId) => `movie?movieId=${movieId}`,
        }),
    }),
});

export const { useGetMovieQuery, useGetMoviesQuery } = movieApi;
