import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterarionNumber = 100) => {
    for(let i = 0; i < iterarionNumber; i++){
        console.log('For')
    }
    return `${iterarionNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment} = useCounter(10);
    const [ show, setshow ] = useState(true);

    // memorizar una funcion y solo cuando cambie sus dependencias se vuelve a llamar
    const memorizedValue = useMemo(() => heavyStuff(counter),[counter]);

    return (
        <>
            <h1>Counter : <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >+1</button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setshow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
