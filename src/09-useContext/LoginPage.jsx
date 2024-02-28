import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    // llamar al context y obtener los datos que necesitamos en este componente
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage <small>{user?.name}</small></h1>
            <hr />
            <pre aria-label="pre">
                {JSON.stringify(user)}
            </pre>

            <button 
                className="btn btn-primary"
                onClick={() => setUser({id:123, name: 'Prueba'})}
            >
                Establecer usuario
            </button>
        </>
    )
}
