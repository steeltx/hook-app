import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// cuando carga el reducer, intentar obtener los datos desde el local storage
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    // cuando cambie los todos, guardar en local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO ]Add Todo',
            payload: todo
        }
        // funcion para llamar la accion
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }
}