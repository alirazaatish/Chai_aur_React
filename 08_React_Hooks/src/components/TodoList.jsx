import React, { useReducer, useState } from 'react';

// Reducer function to manage the todos
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

const initialTodos = [];

const TodoApp = () => {
  const [todoValue, setTodoValue] = useState(''); // To manage the input value
  const [todos, dispatch] = useReducer(reducer, initialTodos); // useReducer to manage todos

  const handleAddTodo = () => {
    if (todoValue.trim()) {
      // Create a new todo dynamically with a unique id
      const newTodo = {
        id: Date.now(), // Generate unique id based on timestamp
        title: todoValue,
        complete: false,
      };

      // Dispatch an action to add the new todo
      dispatch({ type: 'ADD_TODO', payload: newTodo });

      // Clear the input field after adding
      setTodoValue('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input field for adding a new todo */}
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* Render the list of todos */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            <input type="checkbox"
             value={todo.complete}
             />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
