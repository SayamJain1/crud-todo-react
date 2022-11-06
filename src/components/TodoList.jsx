import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        setTodos(todos.map((todoM) => {
            if (todoM.id === todo.id) {
                return {...todoM, completed : !todoM.completed}
            }
            return todoM;
        }))
    }

    const handleDelete = (todo) => {
        setTodos(todos.filter((todoF) => todoF.id !== todo.id))
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'completed' : ''}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className="button-complete list-btn" onClick={() => handleComplete(todo)}>
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button className="button-edit list-btn" onClick={() => handleEdit(todo)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="button-complete list-btn" onClick={() => handleDelete(todo)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
