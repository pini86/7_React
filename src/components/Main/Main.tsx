import { FunctionComponent } from "react";
import { Filter } from "../Filter/Filter";
import styles from "./Main.module.css";

export const Main: FunctionComponent = (f) => {
    const filmsList = ["Matrix", "Monty Python", "Forest Gamp"];
    return (
        <div className={styles.main_wrap}>
            <span>Main</span>
            <div>
                <Filter />
            </div>
            <div>
                {filmsList.map((film) => (
                    <div key={film}>
                        <span>{film}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
