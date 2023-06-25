/* import { FunctionComponent, ReactFragment, Fragment } from "react";

interface Props {
    title: string;
    genre: string;
    seasonsCount: number;
}
export const FilmInfo: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
}) => {
    return (
        <div>
    )
};
 */

"use client";
import styles from "../../components/FilmDetails/FilmDetails.module.css";
import { ReactReduxContext, useSelector } from "react-redux";
import { ControlBasket } from "../ControlBasket/ControlBasket";
import { StoreProvider } from "../../redux/StoreProvider";
import { useContext } from "react";
import { selectMovies } from "@/redux/features/movies/selector";

const FilmInfo = (id: string) => {
    console.log(id);
    const dataFilm = useSelector((state) => selectMovies(state)).movies.filter(
        (item) => item.id === id
    );

    const {
        title,
        posterUrl,
        genre,
        releaseYear,
        description,
        rating,
        director,
        reviewIds,
    } = dataFilm;
    return (
        <div className={styles.films_wrap}>
            <div className={styles.film_content}>
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
export default FilmInfo;
