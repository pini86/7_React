/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "../../components/FilmDetails/FilmDetails.module.css";
import { useSelector } from "react-redux";
import { ControlBasket } from "../../components/ControlBasket/ControlBasket";
import { StoreProvider } from "../../redux/StoreProvider";

const FilmDetails = ({ movie }) => {
    console.log(movie);

    const {
        id,
        title,
        posterUrl,
        genre,
        releaseYear,
        description,
        rating,
        director,
        reviewIds,
    } = movie;

    return (
        <>
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
        </>
    );
};
export default FilmDetails;

export async function getStaticPaths() {
    const movies = await (
        await fetch("http://localhost:3001/api/movies")
    )?.json();
    const paths = movies.map((movie) => ({
        params: { id: movie.id },
    }));

    // `fallback: false` означает, что для ошибки 404 используется другой маршрут
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const movie = await (
        await fetch(`http://localhost:3001/api/movie?movieId=${params.id}`)
    ).json();

    return {
        props: {
            movie,
        },
    };
}
