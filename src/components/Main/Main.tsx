"use client";
import { FunctionComponent, useState } from "react";
import { Filter } from "../Filter/Filter";
import styles from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "../../redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import {
    useGetMoviesQuery,
    useGetMovieQuery,
} from "../../redux/services/movieApi";
import { Films } from "../Films/Films";

const PRODUCT_ID = "3";

export const Main: FunctionComponent = () => {
    const dispatch = useDispatch();
    const Film = ({ filmId }: { filmId: string }) => {
        const { data, isLoading, error } = useGetMovieQuery(filmId);
        if (isLoading) {
            return <span>Loading !!!</span>;
        }
        if (!data || error) {
            return <span>Not found!</span>;
        }
        return <div>Active : {data.title}</div>;
    };
    /*  const Films = () => {
        const { data, isLoading, error } = useGetMoviesQuery("");
        const [currentFilmId, setCurrentFilmId] = useState();

        if (isLoading) {
            return <span>Loading !!!</span>;
        }
        if (!data || error) {
            return <span>Not found!</span>;
        }
        return (
            <div>
                {data.map(({ id, title }) => (
                    <button key={id} onClick={() => setCurrentFilmId(id)}>
                        {title}
                    </button>
                ))}
                {currentFilmId && <Film filmId={currentFilmId} />}
            </div>
        );
    }; */

    const Product = () => {
        const productAmount = useSelector((state) =>
            selectProductAmount(state, PRODUCT_ID)
        );
        return <div>{productAmount}</div>;
    };

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main_content}>
                <div className={styles.filter_wrap}>
                    <Filter />
                </div>
                <div className={styles.filmslist_wrap}>
                    <button
                        onClick={() =>
                            dispatch(cartActions.decrement(PRODUCT_ID))
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            dispatch(cartActions.increment(PRODUCT_ID))
                        }
                    >
                        +
                    </button>
                    <Product />
                    <Films />
                </div>
            </div>
        </div>
    );
};
