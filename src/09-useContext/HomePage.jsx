import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    // llamar al context y obtener los datos que necesitamos en este componente
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>HomePage <small>{user?.name}</small></h1>
            <hr />
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
}
