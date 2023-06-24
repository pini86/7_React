"use client";
import styles from "./Films.module.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../redux/features/movies";
import { useGetMoviesQuery } from "../../redux/services/movieApi";
import { ControlBasket } from "../ControlBasket/ControlBasket";
export const Films = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetMoviesQuery("");
    //const [currentFilmId, setCurrentFilmId] = useState();

    if (isLoading) {
        return <span>Loading !!!</span>;
    }
    if (!data || error) {
        return <span>Not found!</span>;
    }

    dispatch(moviesActions.addMovies(data));
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
