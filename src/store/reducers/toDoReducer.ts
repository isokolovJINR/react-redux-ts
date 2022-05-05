import {ITodo, TodoAction, TodoActionTypes} from "../../types/todo";

const  initialState: ITodo = {
    todoes: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1,
}


export const toDoReducer = (state= initialState, action: TodoAction): ITodo => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return { ...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todoes:  action.payload, }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return { ...state, page: action.payload}

        default:
            return state;



    }

}