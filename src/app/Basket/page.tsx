/* eslint-disable @next/next/no-img-element */
"use client";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import { selectCartModule } from "../../redux/features/cart/selector";
import { selectMovies } from "../../redux/features/movies/selector";
import { ControlBasket } from "../../components/ControlBasket/ControlBasket";

export default function Basket() {
    const filmsInBasket = useSelector((state) => {
        const allFilms = selectMovies(state).movies;
        if (!allFilms || !allFilms.length) {
            return [];
        }
        return allFilms.filter((movie) =>
            Object.keys(selectCartModule(state)).includes(movie.id)
        );
    });
    const allAmount = useSelector((state) => {
        return Object.values(selectCartModule(state)).reduce(
            // @ts-ignore
            (acc, val) => acc + val,
            0
        ) as number;
    });
    return (
        <main>
            <Header />
            <div className={styles.main_basket_wrap}>
                <div className={styles.films_basket_wrap}>
                    {filmsInBasket.map(({ id, title, posterUrl, genre }) => (
                        <div className={styles.film_content} key={id}>
                            <img
                                src={posterUrl}
                                alt={title}
                                className={styles.film_poster}
                            ></img>
                            <div className={styles.film_info_wrap}>
                                <h3 className={styles.film_info_title}>
                                    {title}
                                </h3>
                                <span className={styles.film_info_genre}>
                                    {genre}
                                </span>
                            </div>
                            <ControlBasket id={id} close={true} />
                        </div>
                    ))}
                </div>
                <div className={styles.total_basket_wrap}>
                    <div className={styles.total_basket_count}>
                        <span>Итого билетов:</span>
                        <span>{allAmount}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
