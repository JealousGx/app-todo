import React from 'react'

import Todo from './Todo';
const TodoList = ({ toDos, setToDos, filterToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterToDos.map(toDo => (<Todo key={toDo.id} toDo={toDo} text={toDo.text} setToDos={setToDos} toDos={toDos} />))}
            </ul>
        </div>
    )
}

export default TodoList;
