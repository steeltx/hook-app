import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('pruebas en LoginPage', () => {

    const user = {
        id: 1,
        name: 'Usuario' 
    }

    test('debe de mostrar el componente sin el usuario', () => {
        render( 
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar el setUser cuando se hace click', () => {

        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{user: null, setUser:setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        // obtener la referencia del boton y hacer click
        const button = screen.getByRole("button");
        fireEvent.click(button);
        // esperar que la funcion sea llamada con los parametros indicados
        expect(setUserMock).toHaveBeenCalledWith({"id": 123, "name": "Prueba"});

    });

});