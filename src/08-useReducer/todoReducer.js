
export const todoReducer = (initialState = [], action) => {
    switch(action.type){
        case '[TODO ]Add Todo':
            // colocar los datos del estado y agregar lo que venga en el payload
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}