import React, {useState, useEffect} from 'react'
import './App.css';

///Imports
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);

const getLocalTodos = () => {
  if(localStorage.getItem("toDos" === null)) {
    localStorage.setItem("toDos", JSON.stringify([]));
  }
  else {
    setToDos(JSON.parse(localStorage.getItem("toDos")));
  }
}

useEffect(() => {
  getLocalTodos();
}, [])

useEffect(() => {
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilterToDos(toDos.filter(toDo => toDo.completed === true));
        break;
      case 'uncompleted':
        setFilterToDos(toDos.filter(toDo => toDo.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  }

const saveLocalTodos = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}  

  filterHandler();
  saveLocalTodos();
}, [toDos, status])
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        toDos={toDos} 
        setToDos={setToDos} 
        setStatus={setStatus}
      />
      <TodoList toDos={toDos} setToDos={setToDos} filterToDos={filterToDos} />
    </div>
  );
}

export default App;
