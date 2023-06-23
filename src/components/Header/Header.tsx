import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header: FunctionComponent = ({}) => {
    return (
        <div className={styles.header_wrap}>
            <div>
                <Link href="/">
                    <div className={styles.title}>Билетопоиск</div>
                </Link>
            </div>
            <div className={styles.basket_icon_wrap}>
                <div className={styles.basket_count}>30</div>
                <Link href="/Basket">
                    {" "}
                    <div className={styles.basket_icon}></div>
                </Link>
            </div>
        </div>
    );
};
