"use client";
import styles from "./Films.module.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../redux/features/movies";
import { useGetMoviesQuery } from "../../redux/services/movieApi";
import { ControlBasket } from "../ControlBasket/ControlBasket";
import Link from "next/link";
import { selectMovies } from "@/redux/features/movies/selector";

export const Films = ({ dataFilms }) => {
    //const dataFilms = useSelector((state) => selectMovies(state)).movies;
    return (
        <div className={styles.films_wrap}>
            {dataFilms.map(({ id, title, posterUrl, genre }) => (
                <div className={styles.film_content} key={id}>
                    <img
                        src={posterUrl}
                        alt={title}
                        className={styles.film_poster}
                    ></img>
                    <div className={styles.film_info_wrap}>
                        {/* <Link href={`/FilmDetails/${encodeURIComponent(id)}`}> */}
                        <Link
                            href="/pages/FilmDetails/[id]"
                            as={`/pages/FilmDetails/${id}`}
                        >
                            <h3 className={styles.film_info_title}>{title}</h3>
                        </Link>
                        <span className={styles.film_info_genre}>{genre}</span>
                    </div>
                    <ControlBasket id={id} />
                </div>
            ))}
        </div>
    );
};
