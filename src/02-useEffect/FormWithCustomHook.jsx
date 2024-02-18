import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    // usar el custom hook
    const {formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;

    return (
        <>
            <h1>Formulario con custom hook</h1>
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

            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

        </>
    )
}

