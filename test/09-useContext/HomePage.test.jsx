import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('pruebas en HomePage', () => {

    const user = {
        id: 1,
        name: 'Usuario' 
    }

    test('debe de mostrar el componente sin el usuario', () => {

        // se coloca el context con sus valores para que funcione el componente
        render( 
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de mostrar el componente con el usuario', () => {

        render( 
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
    });

});