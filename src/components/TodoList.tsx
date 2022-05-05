import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const { todoes,limit,error, loading,page } = useTypedSelector(state => state.todo)
    const {fetchTodoes, setTodoPage}= useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect( () => {
        fetchTodoes(page, limit)


    }, [page])
    if (loading) {
        return <h1>LOADIND...</h1>
    }
    if (error) {
        return <h1>error</h1>
    }
    return (
        <div>
            {todoes.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>

            )}
            <div
                style={{display: "flex", }}>
                {pages.map(p =>
                    <div
                        key={p}
                        style={{border: p === page ? '2px solid green': '2px solid gray', padding: 10}}
                        onClick={() => setTodoPage(p)}
                    >

                        {p}
                    </div>

                )}
            </div>
        </div>

    );
};

export default TodoList;