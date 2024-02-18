import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value) => {
        setCounter(counter + value);
    }

    const decrement = (value) => {
        if(counter < 1) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    // variables/metodos a exponer
    return {
        counter,
        increment,
        decrement,
        reset
    }
}