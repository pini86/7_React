"use client";
import styles from "./ControlBasket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "../../redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import { useState } from "react";
import { createPortal } from "react-dom";

export const ControlBasket = ({ id, close = false }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const Count = () => {
        const productAmount = useSelector((state) =>
            selectProductAmount(state, id)
        );
        return productAmount;
    };
    const count = Count();

    const del = () => {
        setShowModal(true);
    };

    const decrementFunc = () => {
        if (count === 1) {
            setShowModal(true);
        } else {
            dispatch(cartActions.decrement(id));
        }
    };
    return (
        <div className={styles.control_wrap}>
            <button
                onClick={decrementFunc}
                className={
                    styles.control_button +
                    ` ` +
                    (count ? styles.enabled : styles.disabled)
                }
            >
                -
            </button>
            <div>{count}</div>
            <button
                onClick={() => dispatch(cartActions.increment(id))}
                className={
                    styles.control_button +
                    ` ` +
                    (count < 30 ? styles.enabled : styles.disabled)
                }
            >
                +
            </button>
            <button
                onClick={del}
                className={styles.close}
                style={{ display: close ? "block" : "none" }}
            ></button>
            {showModal &&
                createPortal(
                    <ModalContent
                        onClose={() => {
                            setShowModal(false);
                        }}
                        delFunc={() => {
                            setShowModal(false);
                            dispatch(cartActions.resetId(id));
                        }}
                    />,
                    document.body
                )}
        </div>
    );

    function ModalContent({ onClose, delFunc }) {
        return (
            <div className={styles.modal}>
                <div className={styles.modal_wrap}>
                    <div className={styles.modal_title_wrap}>
                        <div className={styles.modal_title_content}>
                            <span className={styles.modal_title}>
                                Удаление билета
                            </span>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                }}
                                className={styles.close}
                            ></button>
                        </div>
                        <span className={styles.modal_title2}>
                            Вы уверены, что хотите удалить билет?
                        </span>
                    </div>
                    <div className={styles.modal_button_wrap}>
                        <button
                            onClick={delFunc}
                            className={styles.modal_button_yes}
                        >
                            Yes
                        </button>
                        <button
                            onClick={onClose}
                            className={styles.modal_button_no}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};
