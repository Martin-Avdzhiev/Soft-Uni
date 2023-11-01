import TodoItem from "./TodoItem"
import { useEffect, useState } from "react"
export default function TodoList() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
        .then(response => response.json())
        .then(data => {
            const result = Object.values(data);
            setTodos(result);
        })
        .catch(err => console.log(err))
    }, []);

    const changeStatusHandler = (todoId) => {
        setTodos(state => state.map((todo => todo._id === todoId ? {...todo, isCompleted: !todo.isCompleted}: todo)))
    }
    
    return (
        <>
            {/* <!-- Section container --> */}
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">

                    {/* <!-- Loading spinner - show the load spinner when fetching the data from the server-->
                        <div className="loading-container">
                            <div className="loading-spinner">
                                <span className="loading-spinner-text">Loading</span>
                            </div>
                        </div> */}

                    {/* <!-- Todo list table --> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(todo => (
                                <TodoItem 
                                key={todo._id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                                id={todo._id}
                                changeStatusHandler={changeStatusHandler}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}