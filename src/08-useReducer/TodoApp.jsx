import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

// cuando carga el reducer, intentar obtener los datos desde el local storage
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [] );
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

    return (
        <>
            <h1>TodoApp: (10) <small>pendientes : 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div> 
        </>
    )
}
