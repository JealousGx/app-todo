import React from 'react'

const Todo = ({ text, toDo, setToDos, toDos }) => {
    const deleteHandler = () => {
        setToDos(toDos.filter(el => el.id !== toDo.id))
    }

    const completeHandler= () => {
        setToDos(toDos.map(item => {
            if (item.id === toDo.id)
                return {...item, completed: !item.completed};
            return item;
        }))
    }

    return (
        <div>
            <div className="todo">
                <li className={`todo-item ${toDo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} title="Completed" className="complete-btn">
                    <i className="fas fa-check" />
                </button>
                <button title="Delete" onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash" />
                </button>
            </div>
        </div>
    )
}

export default Todo
