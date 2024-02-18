import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect( () => {
        // console.log('effect')
    },[]);

    useEffect( () => {
        // console.log('effect formstate')
    },[formState]);

    useEffect( () => {
        // console.log('effect email')
    },[email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder="test@test.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'user2') && <Message />
            }
        </>
    )
}

