import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/features/cart/index";
import { moviesReducer } from "../redux/features/movies/index";
import { movieApi } from "./services/movieApi";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        movies: moviesReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([movieApi.middleware]),
});

//console.log(store.getState());
//console.log(store.getState().cart);
