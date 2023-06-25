"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectCartModule } from "../../redux/features/cart/selector";
import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header: FunctionComponent = ({}) => {
    /* const allAmount = useSelector((state) => {
        return Object.values(selectCartModule(state)).reduce(
            // @ts-ignore
            (acc, val) => acc + val,
            0
        ) as number;
    }); */

    const [allAmount, setAllAmount] = useState(
        Number(localStorage.getItem("TF_CART")) || 0
    );

    useEffect(() => {
        window.addEventListener("storage", (e) =>
            setAllAmount(+Number(localStorage.getItem("TF_CART")))
        );
        return () => {
            window.removeEventListener("storage", (e) =>
                setAllAmount(+Number(localStorage.getItem("TF_CART")))
            );
        };
    }, []);

    const Count = () => {
        return <div>{allAmount}</div>;
    };
    return (
        <div className={styles.header_wrap}>
            <div>
                <Link href="/">
                    <div className={styles.title}>Билетопоиск</div>
                </Link>
            </div>
            <div className={styles.basket_icon_wrap}>
                <div
                    className={styles.basket_count}
                    style={{ display: allAmount === 0 ? "none" : "block" }}
                >
                    <Count />
                </div>
                <Link href="/Basket">
                    <div className={styles.basket_icon}></div>
                </Link>
            </div>
        </div>
    );
};
