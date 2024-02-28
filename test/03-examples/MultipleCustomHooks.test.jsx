import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

describe('pruebas en MultipleCustomHooks', () => {

    // realizar el mock de useCounter para poder usarlo en todas las pruebas
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    // antes de cada prueba limpiar
    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        // valores que regresa el hook
        useFetch.mockReturnValue({data: null, isLoading: true, hasError: null});
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText('BrakingBad Quotes'));
        // obtener la referencia del boton y ver si esta deshabilitado
        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Prueba', quote: 'Hola Mundo'}], 
            isLoading: false, 
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Prueba')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: [{author: 'Prueba', quote: 'Hola Mundo'}], 
            isLoading: false, 
            hasError: null
        });
        
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });

});