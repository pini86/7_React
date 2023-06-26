"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const reviewApi = createApi({
    reducerPath: "reviewAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getReviews: builder.query({ query: () => "reviews" }),
        getReview: builder.query({
            query: (reviewId) => `reviews?movieId=${reviewId}`,
        }),
    }),
});

export const { useGetReviewQuery, useGetReviewsQuery } = reviewApi;
