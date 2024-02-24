import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//     id: 123,
//     name: 'test'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();
    
    return (
        // se provee a los hijos de lo indicado en value
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
