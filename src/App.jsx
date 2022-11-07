import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Form
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
