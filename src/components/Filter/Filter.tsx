"use client";
import { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { selectFilters } from "../../redux/features/filters/selector";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "@/redux/features/filters";
import { selectTheaters } from "@/redux/features/theaters/selector";

export const Filter = () => {
    const dispatch = useDispatch();
    /*   const [currFilters, setCurrFilters] = useState({
        title: undefined,
        genre: undefined,
        theater: undefined,
    }); */

    const currentTheatres = useSelector((state) => selectTheaters(state));
    const currentFilters = useSelector((state) => selectFilters(state)).filters;

    useEffect(() => {
        const objSel = document.getElementById("theater") as HTMLSelectElement;

        if (objSel) {
            Object.values(currentTheatres).forEach(
                (th, index) =>
                    (objSel.options[index] = new Option(th.name, th.id))
            );
        }
    }, [currentTheatres]);

    /*    useEffect(() => {
        dispatch(
            filtersActions.addFilters({
                ...currentFilters,
                ...currFilters,
            })
        );
    }, [currFilters]); */

    function handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        dispatch(
            filtersActions.addFilters({
                ...currentFilters,
                [name]: value,
            })
        );
        //setCurrFilters({ ...currFilters, [name]: value });
        // console.log(currFilters);
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
                        <option value="">All</option>
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
