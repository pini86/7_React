/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { selectCartModule } from "@/redux/features/cart/selector";
import { selectMovies } from "@/redux/features/movies/selector";
import { selectFilters } from "../../redux/features/filters/selector";
import { useDispatch, useSelector } from "react-redux";
import { useGetTheatersQuery } from "../../redux/services/theatersApi";
import { theatersActions } from "../../redux/features/theaters/index";
import { filtersActions } from "@/redux/features/filters";

export const Filter = () => {
    const dispatch = useDispatch();
    const [currFilters, setCurrFilters] = useState({
        title: undefined,
        genre: undefined,
        theaters: undefined,
    });
    const { data, isLoading, error } = useGetTheatersQuery("");

    const dataFilms = useSelector((state) => selectMovies(state)).movies;
    const currentFilters = useSelector((state) => selectFilters(state)).filters;

    useEffect(() => {
        const objSel = document.getElementById("theater") as HTMLSelectElement;

        if (objSel && data) {
            data.forEach(
                (th, index) =>
                    (objSel.options[index] = new Option(th.name, th.id))
            );
        }
    }, [data]);

    useEffect(() => {
        dispatch(
            filtersActions.addFilters({
                ...currentFilters,
             ...currFilters,
            })
        );
    }, [currFilters]);
    
    if (isLoading) {
        return <span>Loading !!!</span>;
    }
    if (!data || error) {
        return <span>Not found!</span>;
    }

    dispatch(theatersActions.addTheaters(data));

    function handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let filteredFilms;
        setCurrFilters({ ...currFilters, [name]: value });
        //if (name === "genre") {
        //filteredFilms = dataFilms.filter((film) => film.genre === value);
        // setCurrFilters({...currFilters, genre:value})
        //}
        //if (name === "title") {
        // setCurrFilters({...currFilters, title:value})
        /* filteredFilms = dataFilms.filter((film) =>
                film.title.includes(value)
            ); */
        // }
        //if (name === "theater") {
        //   setCurrFilters({...currFilters, theaters:value})
        /* console.log("data theaters", data);
            const selectedFilms = [
                ...data.filter((th) => th.id === value).movieIds,
            ]; // ids фильмов в выбраном театре
            console.log("selected Ids films", selectedFilms);
            filteredFilms = dataFilms.filter((film) =>
                selectedFilms.includes(film.id)
            ); */
        //}
        console.log(currFilters);
        /* console.log({ ...currentFilters, [name]: value });
        dispatch(
            filtersActions.addFilters({ ...currentFilters, [name]: value })
        ); */
        /*  this.setState({
          [name]: value
        }); */
    }

    return (
        <div className={styles.filter_wrap}>
            <form></form>
            <span className={styles.filter_title}>Фильтр поиска</span>
            <div className={styles.filter_content}>
                <div className={styles.filter_item}>
                    <label className={styles.filter_item_title}>Название</label>
                    <input
                        className={styles.filter_item_input}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Введите название"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className={styles.filter_item}>
                    <label className={styles.filter_item_title}>Жанр</label>
                    <select
                        className={styles.filter_item_input}
                        id="genre"
                        name="genre"
                        placeholder="Выберите жанр"
                        onChange={handleInputChange}
                    >
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                    </select>
                </div>
                <div className={styles.filter_item}>
                    <label className={styles.filter_item_title}>
                        Кинотеатр
                    </label>
                    <select
                        className={styles.filter_item_input}
                        id="theater"
                        name="theater"
                        placeholder="Выберите кинотеатр"
                        onChange={handleInputChange}
                    ></select>
                </div>
            </div>
        </div>
    );
};
