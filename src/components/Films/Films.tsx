"use client";
import styles from "./Films.module.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../redux/features/movies";
import { useGetMoviesQuery } from "../../redux/services/movieApi";
import { ControlBasket } from "../ControlBasket/ControlBasket";
import Link from "next/link";
import { selectMovies } from "@/redux/features/movies/selector";
import { selectFilters } from "@/redux/features/filters/selector";
import { selectTheaters } from "@/redux/features/theaters/selector";

export const Films = () => {
    const currentFilters = useSelector((state) => selectFilters(state));
    const dataFilms = useSelector((state) => selectMovies(state)).movies;
    const currentTheatresObj = useSelector((state) => selectTheaters(state));

    let filmsFiltered = [...dataFilms];

    if (currentFilters.theater) {
        const currentTheatres = Object.values(currentTheatresObj);

        const selectedFilms = currentTheatres.filter(
            (th) => th.id === currentFilters.theater
        )[0].movieIds; // ids фильмов в выбраном театре
        filmsFiltered = dataFilms.filter((film) =>
            selectedFilms.includes(film.id)
        );
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
        <>
            <div className={styles.films_wrap}>
                {filmsFiltered.map(({ id, title, posterUrl, genre }) => (
                    <div className={styles.film_content} key={id}>
                        <img
                            src={posterUrl}
                            alt={title}
                            className={styles.film_poster}
                        ></img>
                        <div className={styles.film_info_wrap}>
                            <Link
                                href={`/FilmDetails/${encodeURIComponent(id)}`}
                            >
                                <h3 className={styles.film_info_title}>
                                    {title}
                                </h3>
                            </Link>
                            <span className={styles.film_info_genre}>
                                {genre}
                            </span>
                        </div>
                        <ControlBasket id={id} />
                    </div>
                ))}
            </div>
        </>
    );
};
