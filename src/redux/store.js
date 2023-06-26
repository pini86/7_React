import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/features/cart/index";
import { moviesReducer } from "../redux/features/movies/index";
import { movieApi } from "./services/movieApi";
import { theatersApi } from "./services/theatersApi";
import { theatersReducer } from "../redux/features/theaters/index";
import { filtersReducer } from "../redux/features/filters/index";
import { reviewApi } from "./services/reviewApi";
import { reviewsReducer } from "../redux/features/reviews/index";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        movies: moviesReducer,
        theaters: theatersReducer,
        filters: filtersReducer,
        reviews: reviewsReducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [theatersApi.reducerPath]: theatersApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([movieApi.middleware])
            .concat([theatersApi.middleware])
            .concat([reviewApi.middleware]),
});

//console.log(store.getState());
//console.log(store.getState().cart);
