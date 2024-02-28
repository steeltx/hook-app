import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('pruebas en MainApp', () => {

    test('debe de mostrar el HomePage', () => {
        // se coloca MemoryRouter para proveer de los metodos necesarios, parecido a BrowserRouter
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
});