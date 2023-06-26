import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        reset: () => initialState,
        addReviews: (state, { payload }) => {
            return { ...state, ...payload };
        },
    },
});

export const reviewsReducer = reviewsSlice.reducer;
export const reviewsActions = reviewsSlice.actions;
