import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ( { target } ) => {
        // obtener los valores del input
        const {name, value} = target;
        // copiar el objeto y colocar la actualización de la propiedad
        setFormState({
            ...formState,
            [name]: value
        });
    }
    
    // regresar el form desestructurado, el form y la funcion para cambiar
    return {
        ...formState,
        formState,
        onInputChange
    }
}
