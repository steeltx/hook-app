import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoordrs] = useState({x:0, y: 0});

    useEffect(() => {
        
        const onMouseMove = ( {x, y}) => {
            setCoordrs({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // al terminar el componente, se quita el listener
            window.removeEventListener('mousemove', onMouseMove);
        }
    },[])

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify(coords)}
        </>
    )
}
