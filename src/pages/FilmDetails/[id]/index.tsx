/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./Films.module.css";
import { useSelector } from "react-redux";
import { ControlBasket } from "../../../components/ControlBasket/ControlBasket";
import { selectMovies } from "@/redux/features/movies/selector";

export const FilmDetails = ({ query }) => {
    const { id } = query;
    const {
        title,
        posterUrl,
        genre,
        releaseYear,
        description,
        rating,
        director,
        reviewIds,
    } = useSelector((state) => {
        const allFilms = selectMovies(state).movies;
        if (!allFilms || !allFilms.length) {
            return [];
        }
        return allFilms.filter((movie) => movie.id === id);
    });

    return (
        <div className={styles.films_wrap}>
            <div className={styles.film_content} key={id}>
                <img
                    src={posterUrl}
                    alt={title}
                    className={styles.film_poster}
                ></img>
                <div className={styles.film_info_wrap}>
                    <h3 className={styles.film_info_title}>{title}</h3>
                    <span className={styles.film_info_genre}>{genre}</span>
                </div>
                <ControlBasket id={id} />
            </div>
        </div>
    );
};

