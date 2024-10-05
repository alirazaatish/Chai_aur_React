import React, { useState } from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    let nextId = tasks.length + 1; // Simple ID management

    const addTask = (e) => {
        e.preventDefault();
        if (!inputValue) return; // Prevent empty tasks
        const newTask = {
            id: nextId,
            text: inputValue,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
        nextId++;
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(item => (
                    <li key={item.id}>
                        <span
                            style={{
                                textDecoration: item.completed ? 'line-through' : 'none',
                            }}
                            onClick={() => toggleTask(item.id)}
                        >
                            {item.text}
                        </span>
                        <button onClick={() => removeTask(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
