import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // se memoriza la funcion y solo va cambiando el valor que regresa
    const increment = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );

    // const increment = () => {
    //     setCounter(counter+1);
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    )
}
