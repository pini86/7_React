"use client";
import styles from "./ControlBasket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "../../redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const ControlBasket = ({ id, close = false }) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(
        Number(window.localStorage.getItem("TF_CART")) || 0
    );
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const updateCart = (newValue) => {
        window.localStorage.setItem("TF_CART", newValue);
        let event = new Event("storage");
        //event.newValue = newValue;
        window.dispatchEvent(event);
    };

    useEffect(() => {
        const localCart = localStorage.getItem("TF_CART");
        const localSt = localStorage.getItem("TF" + id);

        if (!localCart) {
            //local cart
            updateCart("0");
            //localStorage.setItem("TF_CART", "0");
        } else {
            setCart(+localCart);
        }

        if (!localSt) {
            // local count ticket
            localStorage.setItem("TF" + id, "0");
        } else {
            setCount(+localSt);
        }

        window.addEventListener("storage", (e) =>
            setCart(+Number(localStorage.getItem("TF_CART")))
        );
        return () => {
            window.removeEventListener("storage", (e) =>
                setCart(+Number(localStorage.getItem("TF_CART")))
            );
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("TF" + id, count.toString());
        updateCart(cart.toString());
        //localStorage.setItem("TF_CART", cart.toString());
    }, [count, id]);

    const decrementFunc = () => {
        if (count === 1) {
            setShowModal(true);
        } else if (count === 0) {
            return;
        } else {
            setCount(count - 1);
            setCart(cart - 1);
        }
    };
    const incrementFunc = () => {
        if (count === 30) {
            return;
        } else {
            setCount(count + 1);
            setCart(cart + 1);
        }
    };

    /*  const dispatch = useDispatch();

    const Count = () => {
        const productAmount = useSelector((state) =>
            selectProductAmount(state, id)
        );
        return productAmount;
    };
    const count = Count(); */

    const del = () => {
        setShowModal(true);
    };

    /*  const decrementFunc = () => {
        if (count === 1) {
            setShowModal(true);
        } else {
            dispatch(cartActions.decrement(id));
        }
    }; */

    const onClose = () => {
        setShowModal(false);
    };

    const onClickFunc = useCallback(
        ({ target }) => {
            const { current: el } = modalRef;
            if (target === el && showModal) onClose();
        },
        [showModal, onClose]
    );

    const delFunc = () => {
        setShowModal(false);
        setCount(0);
        setCart(cart - 1);
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
                onClick={incrementFunc}
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
                    <ModalContent onClose={onClose} delFunc={delFunc} />,
                    document.body
                )}
        </div>
    );

    function ModalContent({ onClose, delFunc }) {
        return (
            <div className={styles.modal} ref={modalRef} onClick={onClickFunc}>
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
