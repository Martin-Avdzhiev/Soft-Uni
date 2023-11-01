export default function TodoItem({ text,
    isCompleted,
    id,
    changeStatusHandler,
}) {
    const onChangeStatusClick = () =>{
        changeStatusHandler(id);
    }
    return (
        <>
            {/* <!-- Todo item --> */}
            <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
                <td>{text}</td>
                <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
                <td className="todo-action">
                    <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
                </td>
            </tr>
        </>
    )
}