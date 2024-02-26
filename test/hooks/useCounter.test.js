import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('pruebas en useCounter', () => {

    test('debe de retornar los valores por defecto', () => {
        
        // renderizar el custom hook
        const { result } = renderHook(() => useCounter());
        // obtener los valores
        const { counter, decrement, increment, reset} = result.current;
        // esperar que el contador con valor inicial sea 10
        expect(counter).toBe(10);
        // esperar que sean funciones
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        // llamar a la funcio que se encuentra en el hook con act
        act(() => {
            increment();
            increment(2);
        });
        // obtener el valor actual del contador
        expect(result.current.counter).toBe(13);
    });

    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });
        // obtener el valor actual del contador
        expect(result.current.counter).toBe(7);
    });

    test('debe de resetar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { reset, increment } = result.current;

        act(() => {
            increment(5);
            reset();
        });
        expect(result.current.counter).toBe(10);
    });

});