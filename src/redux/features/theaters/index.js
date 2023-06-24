import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const theatersSlice = createSlice({
    name: "theaters",
    initialState,
    reducers: {
        reset: () => initialState,
        addTheaters: (state, { payload }) => {
            return { ...state, ...payload };
        },
    },
});

export const theatersReducer = theatersSlice.reducer;
export const theatersActions = theatersSlice.actions;
