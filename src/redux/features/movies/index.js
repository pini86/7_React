import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        reset: () => initialState,
        addMovies(state, { payload }) {
            return { ...state, movies: [...payload] };
        },
    },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;

