/* import { FunctionComponent, useEffect, useState } from "react";

import { useCount } from "../../hooks/useCount";
interface PropsFilmDetails {
    title: string;
    genre: "comedy" | "horror";
    seasonsCount: number;
}

export const FilmDetails: FunctionComponent<PropsFilmDetails> = ({
    title,
    genre,
    seasonsCount,
}) => {
    //let [count, setCount] = useState(0);
    let { count, increment, decrement } = useCount(0);
    useEffect(() => {
        console.log("count:", count);
    }, [count]);
    return (
        <div>
            <span>Film Details</span>
            <p>{title || "Unknown Film"}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Count seasons ${seasonsCount}` : "No"}</p>
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};
 */