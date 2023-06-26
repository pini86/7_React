"use client";
import { Filter } from "../Filter/Filter";
import styles from "./Main.module.css";
import { Films } from "../Films/Films";
import { useDispatch } from "react-redux";
import { moviesActions } from "@/redux/features/movies";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { useGetTheatersQuery } from "@/redux/services/theatersApi";
import { theatersActions } from "@/redux/features/theaters";

export const Main = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetMoviesQuery("");

    const {
        data: data1,
        isLoading: isLoading1,
        error: error1,
    } = useGetTheatersQuery("");

    if (isLoading || isLoading1) {
        return <span>Loading !!!</span>;
    }
    if (!data || error || !data1 || error1) {
        return <span>Not found!</span>;
    }
    dispatch(moviesActions.addMovies(data));
    dispatch(theatersActions.addTheaters(data1));

    return (
        <div className={styles.main_wrap}>
            <Filter />
            <Films />
        </div>
    );
};
