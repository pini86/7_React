"use client";
import styles from "./ControlBasket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "../../redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";

export const ControlBasket = ({ id }) => {
    const dispatch = useDispatch();
    const Count = () => {
        const productAmount = useSelector((state) =>
            selectProductAmount(state, id)
        );
        return productAmount;
    };
    const count = Count();
    return (
        <div className={styles.control_wrap}>
            <button
                onClick={() => dispatch(cartActions.decrement(id))}
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
        </div>
    );
};
