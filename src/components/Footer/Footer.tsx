"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer: FunctionComponent = ({}) => {
    return (
        <div className={styles.footer_wrap}>
            <div>
                <Link href="/QA">
                    <span className={styles.footer_content}>
                        Вопросы-ответы
                    </span>
                </Link>
            </div>
            <div className={styles.footer_content}>
                <Link href="/About">
                    <span className={styles.footer_content}>О нас</span>
                </Link>
            </div>
        </div>
    );
};
