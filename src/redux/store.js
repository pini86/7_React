import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/features/cart/index";
import { moviesReducer } from "../redux/features/movies/index";
import { movieApi } from "./services/movieApi";
import { theatersApi } from "./services/theatersApi";
import { theatersReducer } from "../redux/features/theaters/index";
import { filtersReducer } from "../redux/features/filters/index";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        movies: moviesReducer,
        theaters: theatersReducer,
        filters: filtersReducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [theatersApi.reducerPath]: theatersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([movieApi.middleware])
            .concat([theatersApi.middleware]),
});

//console.log(store.getState());
//console.log(store.getState().cart);
