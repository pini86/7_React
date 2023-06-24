"use client";
import { Filter } from "../Filter/Filter";
import styles from "./Main.module.css";
import { Films } from "../Films/Films";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "@/redux/features/movies";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { selectFilters } from "@/redux/features/filters/selector";
import { useGetTheatersQuery } from "@/redux/services/theatersApi";
import { theatersActions } from "@/redux/features/theaters";

export const Main = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector((state) => selectFilters(state));

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

    let filmsFiltered = [...data];

    if (currentFilters.theater) {
        const currentTheatres = Object.values(data1);

        const selectedFilms = currentTheatres.filter(
            (th) => th.id === currentFilters.theater
        )[0].movieIds; // ids фильмов в выбраном театре
        filmsFiltered = data.filter((film) => selectedFilms.includes(film.id));
    }
    if (currentFilters.genre) {
        filmsFiltered = filmsFiltered.filter(
            (film) => film.genre === currentFilters.genre
        );
    }
    if (currentFilters.title) {
        filmsFiltered = filmsFiltered.filter((film) =>
            film.title
                .toLowerCase()
                .includes(currentFilters.title.toLowerCase())
        );
    }

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main_content}>
                <Filter />
                <Films dataFilms={filmsFiltered} />
            </div>
        </div>
    );
};
