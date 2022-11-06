import React from "react";
import {v4 as uuidv4} from 'uuid'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {


    const onFormSubmit = (e) => {
        e.preventDefault()
        if (!editTodo) {
                setTodos([...todos, {id : uuidv4(), title: input, completed: false}])
                setInput('')
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Write Task for Today"
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
