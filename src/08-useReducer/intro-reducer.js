// estado inicial
const initialState = [{
    id: 1,
    todo: 'JS',
    done: false
}];

// se manda al reducer el estado inicial o anterior y la accion

// en general el reducer tiene que generar un nuevo estado basado en la accion recibida
const todoReducer = (state = initialState, action = {}) => {
    if(action.type==='add todo'){
        return [...state, action.payload]
    }
    // si no se identifica la accion, se regresa el mismo estado
    return state;
}

let todos = todoReducer();

// cuando se desea agregar, eliminar, etc se debe de mandar una accion
const newTodo = {
    id: 2,
    todo: 'CSS',
    done: false
}

const addTodoAction = {
    type: 'add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);