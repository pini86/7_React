/* import { FunctionComponent, useState } from "react";
import { FilmDetails } from "../FilmDetails/FilmDetails";

const filmsDetails= {
    title: "The Simpsond",
    genre : "comedy",
    seasonsCount: 33
}
export const Films: FunctionComponent = () => {
   
    return (
        <div>
            <header />
            <FilmDetails title={FilmDetails.title} genre={filmsDetails.genre} seasonsCount={filmsDetails.seasonsCount}/>
            <Reviews />
            <Recomendations />
            <footer />
        </div>
    );
};
 */
"use client";
import { FunctionComponent, useState } from "react";
import { Filter } from "../Filter/Filter";
import styles from "./Films.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "../../redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import {
    useGetMoviesQuery,
    useGetMovieQuery,
} from "../../redux/services/movieApi";
import { ControlBasket } from "../ControlBasket/ControlBasket";
export const Films = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetMoviesQuery("");
    const [currentFilmId, setCurrentFilmId] = useState();

    if (isLoading) {
        return <span>Loading !!!</span>;
    }
    if (!data || error) {
        return <span>Not found!</span>;
    }
    return (
        <div className={styles.films_wrap}>
            {data.map(({ id, title, posterUrl, genre }) => (
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
                    {/*  <button onClick={() => setCurrentFilmId(id)}>
                        {title}
                    </button> */}
                </div>
            ))}
            {/*  {currentFilmId && <Film filmId={currentFilmId} />} */}
        </div>
    );
};
