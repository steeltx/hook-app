import { useCounter, useFetch } from "../hooks/";
import { LoadingQuote,Quote  } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/', counter);
    const { quote, author} = !!data && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />
            {
                isLoading
                ? <LoadingQuote />
                : <Quote  quote={quote} author={author}/>
            }
            <button
                onClick={() => increment()}
                disabled={isLoading}
                className="btn btn-primary"
            >Next Quote</button>
        </>
    )
}
