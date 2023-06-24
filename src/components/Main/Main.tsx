"use client";
import { Filter } from "../Filter/Filter";
import styles from "./Main.module.css";
import { Films } from "../Films/Films";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "@/redux/features/movies";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { selectFilters } from "@/redux/features/filters/selector";
import { selectTheaters } from "@/redux/features/theaters/selector";

export const Main = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetMoviesQuery("");
    const currentFilters = useSelector((state) => selectFilters(state));
    const currentTheatres = useSelector((state) => selectTheaters(state));

    if (isLoading) {
        return <span>Loading !!!</span>;
    }
    if (!data || error) {
        return <span>Not found!</span>;
    }

    const enriesFilter = Object.entries(currentFilters); //.filter((item) => !!item[1]);

    let filmsFiltered = [...data];
    if (currentFilters.title) {
        filmsFiltered = filmsFiltered.filter((film) =>
            film.title.includes(currentFilters.title)
        );
    }
    if (currentFilters.genre) {
        filmsFiltered = filmsFiltered.filter(
            (film) => film.genre === currentFilters.genre
        );
    }

    if (currentFilters.theaters) {
       /*  const selectedFilms = [
            ...currentTheatres.filter((th) => th.id === currentFilters.theaters)
                .movieIds,
        ]; // ids фильмов в выбраном театре
        console.log("selected Ids films", selectedFilms);
        filmsFiltered = data.filter((film) => selectedFilms.includes(film.id)); */
    }
    console.log(filmsFiltered);

    dispatch(moviesActions.addMovies(data));

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main_content}>
                <Filter />
                <Films />
            </div>
        </div>
    );
};
