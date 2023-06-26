/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "../../../components/FilmDetails/FilmDetails.module.css";
import { useSelector } from "react-redux";
import { ControlBasket } from "../../../components/ControlBasket/ControlBasket";
import { selectMovies } from "@/redux/features/movies/selector";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { useGetReviewQuery } from "@/redux/services/reviewApi";

const FilmDetails = ({ params }) => {
    const dataFilm = useSelector((state) => selectMovies(state)).movies.filter(
        (item) => item.id === params.id
    );
    console.log(dataFilm);
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
    } = dataFilm[0];

    const { data, isLoading, error } = useGetReviewQuery(id);

    if (isLoading) {
        return <span>Loading !!!</span>;
    }
    if (!data || error) {
        return <span>Not found!</span>;
    }

    console.log(reviewIds, data);

    return (
        <>
            <Header />
            <div className={styles.film_det_wrap}>
                <div className={styles.film_det_content}>
                    <img
                        src={posterUrl}
                        alt={title}
                        className={styles.film_det_poster}
                    ></img>
                    <div className={styles.film_det_info_wrap}>
                        <div className={styles.film_det_info_title_wrap}>
                            <h3 className={styles.film_det_info_title}>
                                {title}
                            </h3>
                            <ControlBasket id={id} />
                        </div>
                        <div className={styles.film_det_info_title_content}>
                            {[
                                ["Жанр:", genre],
                                ["Год выпуска: ", releaseYear],
                                ["Рейтинг: ", rating],
                                ["Режиссер: ", director],
                            ].map((item) => (
                                <div
                                    className={styles.film_det_info_item}
                                    key={item[0]}
                                >
                                    <span
                                        className={
                                            styles.film_det_info_item_title
                                        }
                                    >
                                        {item[0]}
                                    </span>
                                    <span
                                        className={
                                            styles.film_det_info_item_content
                                        }
                                    >
                                        {item[1]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.film_det_info_content}>
                            <div className={styles.film_det_info_content_title}>
                                <span>Описание</span>
                            </div>
                            <div className={styles.film_det_info_content_desc}>
                                <span>{description}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {data.map((item) => (
                    <div key={item.id} className={styles.film_det_review_wrap}>
                        <div className={styles.film_det_review_img}></div>
                        <div className={styles.film_det_review_contain}>
                            <div
                                className={
                                    styles.film_det_review_contain_title_wrap
                                }
                            >
                                <div
                                    className={
                                        styles.film_det_review_contain_title_name
                                    }
                                >
                                    {item.name}
                                </div>
                                <div
                                    className={
                                        styles.film_det_review_contain_title_rating
                                    }
                                >
                                    <span
                                        className={
                                            styles.film_det_review_contain_title_rating_span
                                        }
                                    >
                                        Оценка:
                                    </span>
                                    <div
                                        className={
                                            styles.film_det_review_contain_title_rating_numb
                                        }
                                    >
                                        {item.rating}
                                    </div>
                                </div>
                            </div>

                            <div
                                className={
                                    styles.film_det_review_contain_text_wrap
                                }
                            >
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};
export default FilmDetails;
