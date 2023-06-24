import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        reset: () => initialState,
        addFilters: (state, { payload }) => {
            return { ...state, ...payload };
        },
    },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
