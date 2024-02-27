import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('pruebas en MultipleCustomHooks', () => {

    test('debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText('BrakingBad Quotes'));
        // obtener la referencia del boton y ver si esta deshabilitado
        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();
    });

});