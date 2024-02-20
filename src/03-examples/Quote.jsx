import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {

    const pReg = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        const {height, width} = pReg.current.getBoundingClientRect();
        setBoxSize({height, width});
    }, [quote]);

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display: 'flex'}}
            >
                <p ref={pReg} className="mb-1">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
